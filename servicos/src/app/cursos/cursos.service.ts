import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

    cursos: string[] = ['Angular', 'Java', 'TypeScript', 'JavaScript'];

    constructor() {
        console.log('Chamado!');
    }

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
    }

}