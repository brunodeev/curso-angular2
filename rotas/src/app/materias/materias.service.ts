import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  getMaterias() {
    return [
      {id: 1, nome: 'Ciencia de Dados'},
      {id: 2, nome: 'Computacao Gráfica'},
    ];
  }

  getMateria(id: number) {
    let materias = this.getMaterias();

    for(let i = 0; i < materias.length; i++) {
      let materia = materias[i];
      if(materia.id == id) {
        return materia;
      }
    }
    return null;
  }

  constructor() { }
}
