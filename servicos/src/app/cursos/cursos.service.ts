import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();

    cursos: string[] = ['Angular', 'Java', 'TypeScript', 'JavaScript'];

    constructor() {
        console.log('Chamado!');
    }

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
    }

}