import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

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
  formGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
    confirmarSenha: new FormControl('', [Validators.required])
  }, { validators: this.validacao_password() });

  constructor() {
    //esse updateValue e uma funçao do angularforms, e algo ja nativo dele, basciamente, ele verfica/força o a funçao a reavalidar para ver se a funçao ainda e False ou True. Basicamente, ele vai ir e verificar se a senha foi mudada, e se foi mudada, fazer a verificaçao dela. que seria do validacao_password
    this.formGroup.get('senha')?.valueChanges.subscribe(() => {
      this.formGroup.updateValueAndValidity();
    });
    this.formGroup.get('confirmarSenha')?.valueChanges.subscribe(() => {
      this.formGroup.updateValueAndValidity(); 
    }); 
  }

  validacao_password(): ValidatorFn {
    // verifcia se senha e confirmarsenha sao iguais
    return (formGroup: AbstractControl): { [key: string]: boolean } | null => {
      const senha = formGroup.get('senha')?.value;
      const confirmarSenha = formGroup.get('confirmarSenha')?.value;
      return senha === confirmarSenha ? null : { Nigual: true };
    };
  }

  salvar() {
    // console.log(this.formGroup.value); 
    // console.log(this.formGroup.status);

    if (this.formGroup.valid) {
      alert('Novo usuário cadastrado! Nome: ' + this.formGroup.value.nome + ' Email: ' + this.formGroup.value.email);
    } else {
      alert('Por favor, corrija os erros no formulário.');
      this.formGroup.markAllAsTouched(); // funçao de forms reativos: https://v17.angular.io/api/forms/AbstractControl
      //faz basicamente com que o usuario ao menos uma vez tenha interagido com cada input
    }
  }
}
