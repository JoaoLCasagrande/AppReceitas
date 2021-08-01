import { ReceitaComponent } from './receitas/receita/receita.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'receitas', component: ReceitasComponent},
  {path:'receita', component: ReceitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
