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
  };

  books: string[] = ['JavaScript', 'Angular'];

  filtro: string = '';

  adicionarValor(value: string) {
    this.books.push(value);
    console.log(value);
  }

  getCursos() {
    if(this.books.length === 0 || this.filtro === undefined || this.filtro.trim() == '') {
      return this.books;
    }

    return this.books.filter((v) => {
      if(v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  constructor() {}

  ngOnInit() {}

}
