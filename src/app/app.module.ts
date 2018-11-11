import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from 'angular-admin-lte';    //Loading layout module
import { BoxModule } from 'angular-admin-lte';       //Box component

import { adminLteConf } from './admin-lte.conf';   //Import the layout configuration.
import { CoreModule } from './core/core.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormModule } from './forms/forms.module';
import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioListagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BoxModule,
    CoreModule,
    FormModule,
    HttpClientModule,
    LayoutModule.forRoot(adminLteConf),   //Provide the configuration to the layout module.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
