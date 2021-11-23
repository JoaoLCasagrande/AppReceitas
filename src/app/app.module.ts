import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { PratosDetailComponent } from './pratos-detail/pratos-detail.component';
import { SobremesasDetailComponent } from './sobremesas-detail/sobremesas-detail.component';
import { MenuComponent } from './pratos-detail/menu/menu.component';
import { MenuItemComponent } from './pratos-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './pratos-detail/shopping-cart/shopping-cart.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    InicioComponent,
    PratosComponent,
    PratoComponent,
    SobremesasComponent,
    SobremesaComponent,
    PratosDetailComponent,
    SobremesasDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
     
  ],
  providers: [PratosService,
             SobremesasService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
