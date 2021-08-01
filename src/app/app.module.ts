import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { ReceitaComponent } from './receitas/receita/receita.component';
import { ReceitasService } from './receitas/receitas.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ReceitasComponent,
    ReceitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ReceitasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
