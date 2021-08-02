import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { InicioComponent } from './inicio/inicio.component';
import { PratosComponent } from './pratos/pratos.component';
import { PratoComponent } from './pratos/prato/prato.component';
import { PratosService } from './pratos/pratos.service';

import { SobremesasComponent } from './sobremesas/sobremesas.component';
import { SobremesaComponent } from './sobremesas/sobremesa/sobremesa.component';
import { SobremesasService } from './sobremesas/sobremesas.service';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    InicioComponent,
    PratosComponent,
    PratoComponent,
    SobremesasComponent,
    SobremesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PratosService,
             SobremesasService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
