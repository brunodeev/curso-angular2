import { Component } from '@angular/core';

import { ProfessoresService } from './professores.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrl: './professores.component.css'
})
export class ProfessoresComponent {

  professores: any[] = [];

  constructor(private professoresService: ProfessoresService) {}

  ngOnInit() {
    this.professores = this.professoresService.getProfessores();
  }

}
