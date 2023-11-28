import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  url: string = 'https://youtube.com';
  urlImagem: string = 'http://lorempixel.com.br/800/500/?2';
  cursoAngular: boolean = true;

  valorAtual: string = '';
  valorEnter: string = '';

  isMouseOver: boolean = false;

  nomeCurso: string = 'Angular';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  clicked() {
    alert('Botão clicado!');
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  onEnterPressed(valor: any) {
    this.valorEnter = valor;
  }

  mouseOverOut() {
    this.isMouseOver =! this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }
}
