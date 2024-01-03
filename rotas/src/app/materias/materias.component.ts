import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { MateriasService } from './materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.css'
})
export class MateriasComponent {

  materias?: any[];
  pagina?: number;
  subsciption?: Subscription

  constructor(private service: MateriasService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.materias = this.service.getMaterias();
    this.subsciption = this.route.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina']
    });
  }

  ngOnDestroy() {
    this.subsciption?.unsubscribe();
  }

  nextPage() {
    this.pagina!++;
    this.router.navigate(['materias'], {queryParams: {'pagina': this.pagina!++}})
  }

}
