import { PratoComponent } from './pratos/prato/prato.component';
import { PratosComponent } from './pratos/pratos.component';
import { SobremesaComponent } from './sobremesas/sobremesa/sobremesa.component';
import { SobremesasComponent } from './sobremesas/sobremesas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PratosDetailComponent } from './pratos-detail/pratos-detail.component';
import { SobremesasDetailComponent } from './sobremesas-detail/sobremesas-detail.component';


const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'pratos', component: PratosComponent},
  {path:'prato', component: PratoComponent},
  {path:'sobremesas', component: SobremesasComponent},
  {path:'sobremesa', component: SobremesaComponent},
  {path:'pratos/:id', component: PratosDetailComponent},
  {path:'sobremesas/:id', component: SobremesasDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
