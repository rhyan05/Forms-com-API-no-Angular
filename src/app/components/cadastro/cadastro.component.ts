import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  formGroup = new FormGroup({
    nome: new FormControl('',[]),
    email: new FormControl('',[] ),
    senha: new FormControl('',[]),
    confirmarSenha: new FormControl()
  })

  constructor(

  ){

  }


  salvar(){
    console.log(this.formGroup.value);
    alert('Novo usuario cadastrado! Nome:'+this.formGroup.value.nome+ ' Email: '+ this.formGroup.value.email)
    
  }

}
