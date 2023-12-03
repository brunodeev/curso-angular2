import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrl: './diretiva-ngstyle.component.scss'
})
export class DiretivaNgstyleComponent {

  isActive: boolean = true;
  fontsSize: number = 10;

  change() {
    this.isActive = !this.isActive;
  }

  less() {
    if(this.fontsSize > 10) {
      this.fontsSize--;
    }
  }

  more() {
    if(this.fontsSize < 27) {
      this.fontsSize++;
    }
  }
}
