import { PratoComponent } from './pratos/prato/prato.component';
import { PratosComponent } from './pratos/pratos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'pratos', component: PratosComponent},
  {path:'prato', component: PratoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
