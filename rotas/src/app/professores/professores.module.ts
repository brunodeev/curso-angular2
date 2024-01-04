import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProfessoresComponent } from './professores.component';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { ProfessorDetalheComponent } from './professor-detalhe/professor-detalhe.component';
import { ProfessoresRoutingModule } from './professores.routing.module';
import { ProfessoresService } from './professores.service';

@NgModule({
    imports: [
        CommonModule,
        ProfessoresRoutingModule,
        FormsModule
    ],
    declarations: [
        ProfessorFormComponent,
        ProfessorDetalheComponent,
        ProfessoresComponent,
    ],
    providers: [ProfessoresService],
    exports: [],
})
export class ProfessoresModule {}