import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  private professores: any[] = [
    {id: 1, nome: 'Professor01', email: 'professor01@gmail.com'},
    {id: 2, nome: 'Professor02', email: 'professor02@gmail.com'},
    {id: 3, nome: 'Professor03', email: 'professor03@gmail.com'},
    {id: 4, nome: 'Professor04', email: 'professor04@gmail.com'},
    {id: 5, nome: 'Professor05', email: 'professor05@gmail.com'},
    {id: 6, nome: 'Professor06', email: 'professor06@gmail.com'},
  ];

  getProfessores() {
    return this.professores;
  }

  getProfessor(id: number) {
    for(let i = 0; i < this.professores.length; i++) {
      let professor = this.professores[i];

      if(id == professor.id) {
        return professor;
      }
    }
  }

  constructor() { }
}
