import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  nomeportal: string;
  cursos: string[];

  constructor(private cursoService: CursosService) {
    this.nomeportal = 'https://youtube.com';
    this.cursos = this.cursoService.getCursos();
  }

}
