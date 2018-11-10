import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  form = this.fb.group({
    nome: [''],
    telefone: [''],
    email: [''],
    endereco: this.fb.group({
      cep: [''],
      logradouro: [''],
      complemento: [''],
      numero: [''],
      bairro: [''],
      uf: [''],
      municipio: [''],
    }),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.form.value);
  }

}
