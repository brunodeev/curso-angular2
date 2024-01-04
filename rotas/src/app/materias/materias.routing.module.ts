import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MateriasComponent } from '../materias/materias.component';
import { MateriaDetalheComponent } from '../materias/materia-detalhe/materia-detalhe.component';
import { MateriaNaoEncontradaComponent } from '../materias/materia-nao-encontrada/materia-nao-encontrada.component';

const materiasRoutes: Routes = [
  { path: 'materias', component: MateriasComponent },
  { path: 'materia/:id', component: MateriaDetalheComponent },
  { path: 'naoEncontrado', component: MateriaNaoEncontradaComponent }

];

@NgModule({
  imports: [RouterModule.forChild(materiasRoutes)],
  exports: [RouterModule]
})
export class MateriasRoutingModule { }
