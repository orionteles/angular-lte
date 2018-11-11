import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import {UsuarioListagemComponent} from './usuario-listagem/usuario-listagem.component';

const routes: Routes = [
  {path: '', component: UsuarioComponent},
  {path: 'usuario-listagem', component: UsuarioListagemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
