import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {
  
  @Input()
  valor: number = 0;

  @Output()
  mudouValor = new EventEmitter();

  @ViewChild('campoInput')
  campoValorInput!: ElementRef;

  increment() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novovalor: this.valor });
  }

  decrement() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ novovalor: this.valor });
  }
}
