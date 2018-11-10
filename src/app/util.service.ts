import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient) { }

  getEnderecoByCep(cep){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

}
