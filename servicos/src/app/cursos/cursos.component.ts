import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
  providers: [CursosService],     // caso deseje instanciar a segunda vez
})
export class CursosComponent {

  cursos: string[] = [];

  //cursosService: CursosService;

  constructor(private _cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
    
    this._cursosService.emitirCursoCriado.subscribe(

      curso => console.log(curso)
    );
  }

}
