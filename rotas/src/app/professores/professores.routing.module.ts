import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfessoresComponent } from './professores.component';
import { ProfessorDetalheComponent } from './professor-detalhe/professor-detalhe.component';
import { ProfessorFormComponent } from './professor-form/professor-form.component';

const professoresRoutes: Routes = [
    {path: 'professores', component: ProfessoresComponent, children: [
        {path: 'novo', component: ProfessorFormComponent},
        {path: ':id', component: ProfessorDetalheComponent},
        {path: ':id/editar', component: ProfessorFormComponent}
    ]},
];

@NgModule({
    imports: [RouterModule,
        RouterModule.forChild(professoresRoutes)
    ],
    exports: [RouterModule],
})
export class ProfessoresRoutingModule { }