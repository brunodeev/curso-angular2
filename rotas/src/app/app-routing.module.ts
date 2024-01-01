import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MateriasComponent } from './materias/materias.component';
import { MateriaDetalheComponent } from './materia-detalhe/materia-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'materias', component: MateriasComponent },
  { path: 'materia/:id', component: MateriaDetalheComponent },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
