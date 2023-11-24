import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosDetalheComponent
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
