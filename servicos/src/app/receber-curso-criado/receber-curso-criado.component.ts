import { Component } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrl: './receber-curso-criado.component.scss'
})
export class ReceberCursoCriadoComponent {

  curso: string = '';

  constructor(private _cursosService: CursosService) {}

  ngOnInit() {
    this._cursosService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    );
  }

}
