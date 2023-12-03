import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrl: './diretiva-ngclass.component.scss'
})
export class DiretivaNgclassComponent {

  isFavorite1: boolean = false;
  isFavorite2: boolean = false;

  change1() {
    this.isFavorite1 = !this.isFavorite1;
  }

  change2() {
    this.isFavorite2 = !this.isFavorite2;
  }
}
