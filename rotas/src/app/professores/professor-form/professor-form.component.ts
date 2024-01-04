import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfessoresService } from '../professores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrl: './professor-form.component.css'
})
export class ProfessorFormComponent {

  professor?: any;
  subscription?: Subscription;

  constructor(private professoresService: ProfessoresService, private route: ActivatedRoute) {}

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
