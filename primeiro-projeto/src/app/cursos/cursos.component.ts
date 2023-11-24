import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  nomeportal: string;
  cursos: string[];

  constructor() {
    this.nomeportal = 'https://youtube.com';
    this.cursos = ['Java', 'PHP', 'Go'];
  }

}
