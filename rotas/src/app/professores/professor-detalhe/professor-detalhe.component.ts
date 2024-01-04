import { Component } from '@angular/core';
import { ProfessoresService } from '../professores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-professor-detalhe',
  templateUrl: './professor-detalhe.component.html',
  styleUrl: './professor-detalhe.component.css'
})
export class ProfessorDetalheComponent {

  professor?: any;
  subscription?: Subscription;

  constructor(
      private professoresService: ProfessoresService,
      private route: ActivatedRoute,
      private router: Router,
    ) {}

  editarContato() {
    this.router.navigate(['editar'], {relativeTo: this.route});
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      let id = params['id'];

      this.professor = this.professoresService.getProfessor(id);
    });
  }

  ngOnDestroy() {
    this.subscription!.unsubscribe();
  }

}
