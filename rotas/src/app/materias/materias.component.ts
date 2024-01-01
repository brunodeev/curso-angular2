import { Component } from '@angular/core';
import { MateriasService } from './materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.css'
})
export class MateriasComponent {

  materias?: any[];

  constructor(private service: MateriasService) {}

  ngOnInit() {
    this.materias = this.service.getMaterias(); 
  }

}
