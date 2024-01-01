import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MateriasService } from '../materias/materias.service';

@Component({
  selector: 'app-materia-detalhe',
  templateUrl: './materia-detalhe.component.html',
  styleUrl: './materia-detalhe.component.css'
})
export class MateriaDetalheComponent {

  id?: number;
  subscription?: Subscription;
  materia?: any;
  
  constructor(private route: ActivatedRoute, private materiaService: MateriasService, private router: Router) {
    //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.materia = this.materiaService.getMateria(this.id!);

        if(this.materia == null) {
          this.router.navigate(['naoEncontrado']);
        }
    });
  }

  ngOnDestroy() {
    this.subscription!.unsubscribe();
  }

}
