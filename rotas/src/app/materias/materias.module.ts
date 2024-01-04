import { NgModule } from '@angular/core';

import { MateriasComponent } from './materias.component';
import { MateriaDetalheComponent } from './materia-detalhe/materia-detalhe.component';
import { MateriaNaoEncontradaComponent } from './materia-nao-encontrada/materia-nao-encontrada.component';
import { MateriasService } from './materias.service';
import { CommonModule } from '@angular/common';
import { MateriasRoutingModule } from './materias.routing.module';


@NgModule({
    imports: [
        CommonModule,
        MateriasRoutingModule
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