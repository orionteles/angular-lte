import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UUID} from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  save(usuario){

    let usuarios = this.getAll();

    if(usuario._id){

    } else {
      usuario._id = UUID.UUID();
    }

    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

  }

  getAll(){
    let usuarios = localStorage.getItem('usuarios')
    return usuarios ? JSON.parse(usuarios) : [];
  }

  get(id){

  }
}
