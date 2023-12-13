import { Component } from '@angular/core';

@Component({
  selector: 'exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrl: './exemplos-pipes.component.scss'
})
export class ExemplosPipesComponent {

  book: any = {
    title : 'Código Limpo',
    rating : 4.748,
    releaseDate : new Date(2009, 8, 8),
    numberOfPages : 425,
    price : 96.94,
  }

}
