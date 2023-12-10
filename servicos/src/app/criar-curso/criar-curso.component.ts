import { Component } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrl: './criar-curso.component.scss',
  providers: [CursosService],   //      caso deseje instanciar a primeira vez
})
export class CriarCursoComponent {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) {}

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

  onAddCurso(curso: string) {
    this.cursosService.addCurso(curso);
  }

}
