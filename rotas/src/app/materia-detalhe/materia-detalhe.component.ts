import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-materia-detalhe',
  templateUrl: './materia-detalhe.component.html',
  styleUrl: './materia-detalhe.component.css'
})
export class MateriaDetalheComponent {

  id?: string;
  subscription?: Subscription;
  
  constructor(private route: ActivatedRoute) {
    //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.subscription!.unsubscribe();
  }

}
