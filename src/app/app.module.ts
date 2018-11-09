import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from 'angular-admin-lte';    //Loading layout module
import { BoxModule } from 'angular-admin-lte';       //Box component

import { adminLteConf } from './admin-lte.conf';   //Import the layout configuration.
import { CoreModule } from './core/core.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BoxModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),   //Provide the configuration to the layout module.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
