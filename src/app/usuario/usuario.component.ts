import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  form = this.fb.group({
    nome: ['', Validators.required],
    telefone: [''],
    email: [''],
    endereco: this.fb.group({
      cep: [''],
      logradouro: [''],
      complemento: [''],
      numero: [''],
      bairro: [''],
      uf: [''],
      localidade: [''],
    }),
  });

  
  
  constructor(
    private fb: FormBuilder,
    private util: UtilService
  ) { }
  
  ngOnInit() {  
  }

  onSubmit() {
    console.warn(this.form.value);
  }
  
  pesquisarCep(){
    let cep = this.form.get('endereco').value.cep;

    this.util.getEnderecoByCep(cep).subscribe(
    (data: any)=>{
      this.form.patchValue({endereco: data});
    },
    error=>console.log(error)
    )
      
  }

}
