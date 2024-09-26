import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { CepService } from '../../service/cep.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  formGroup: FormGroup;
  erro: string = '';
  endereco: any;

  constructor(private cepServico: CepService) {
    this.formGroup = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required]),
      confirmarSenha: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required])
    }, {validators: this.validacao_password() });

    this.formGroup.get('senha')?.valueChanges.subscribe(() => {
      this.formGroup.updateValueAndValidity();
    });
    this.formGroup.get('confirmarSenha')?.valueChanges.subscribe(() => {
      this.formGroup.updateValueAndValidity(); 
    }); 
  }

  validacao_password(): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: boolean } | null => {
      const senha = formGroup.get('senha')?.value;
      const confirmarSenha = formGroup.get('confirmarSenha')?.value;
      return senha === confirmarSenha ? null : { Nigual: true };
    };
  }

  async consultarCep() {
    this.erro = '';
    this.endereco = null;

    const cep = this.formGroup.get('cep')?.value;
    console.log("cep digitado", cep)
    if (cep.length === 8) {
      this.cepServico.getCep(cep).subscribe(
        (dados) => {
          if (dados.erro) {
            this.erro = 'CEP não encontrado';
          } else {
            console.log("dados cep", dados)
            this.endereco = dados;

          }
        },
        (error) => {
          this.erro = 'Erro ao consultar o CEP';
        }
      );
      // let retorno = await this.cepServico.getCep(cep)
      // console.log("retorno cep", retorno)
    } else {
      this.erro = 'Digite um CEP válido (8 dígitos)';
      this.endereco = null
    }
  }

  salvar() {
    if (this.formGroup.valid) {
      alert('Novo usuário cadastrado! Nome: ' + this.formGroup.value.nome + ' Email: ' + this.formGroup.value.email);
      // alert(`Bairro: ${this.endereco.bairro}`)
    } else {
      alert('Por favor, corrija os erros no formulário.');
      this.formGroup.markAllAsTouched();
    }
  }
}
