import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrl: './diretiva-ngfor.component.scss'
})
export class DiretivaNgforComponent {

  filmes: string[] = ['Os Vingadores', 'Interestelar', 'Procurando Nemo'];

}
