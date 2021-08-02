import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { PratoComponent } from './receitas/prato/prato.component';
import { ReceitasService } from './receitas/receitas.service';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    InicioComponent,
    ReceitasComponent,
    PratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ReceitasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
