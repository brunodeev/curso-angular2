import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MateriasComponent } from './materias.component';
import { MateriaDetalheComponent } from './materia-detalhe/materia-detalhe.component';
import { MateriaNaoEncontradaComponent } from './materia-nao-encontrada/materia-nao-encontrada.component';
import { MateriasService } from './materias.service';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [],
    declarations: [
        MateriasComponent,
        MateriaDetalheComponent,
        MateriaNaoEncontradaComponent
    ],
    providers: [MateriasService],
})
export class MateriasModule {}