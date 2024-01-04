import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MateriasComponent } from './materias/materias.component';
import { MateriaDetalheComponent } from './materias/materia-detalhe/materia-detalhe.component';
import { MateriaNaoEncontradaComponent } from './materias/materia-nao-encontrada/materia-nao-encontrada.component';

const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'materias', component: MateriasComponent },
  { path: 'materia/:id', component: MateriaDetalheComponent },
  { path: 'naoEncontrado', component: MateriaNaoEncontradaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
