import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProfessoresComponent } from './professores.component';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { ProfessorDetalheComponent } from './professor-detalhe/professor-detalhe.component';
import { ProfessoresRoutingModule } from './professores.routing.module';

@NgModule({
    imports: [
        CommonModule,
        ProfessoresRoutingModule,
    ],
    declarations: [
        ProfessorFormComponent,
        ProfessorDetalheComponent,
        ProfessoresComponent,
    ],
    providers: [],
    exports: [],
})
export class ProfessoresModule {}