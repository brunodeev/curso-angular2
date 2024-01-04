import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaNaoEncontradaComponent } from './materia-nao-encontrada.component';

describe('MateriaNaoEncontradaComponent', () => {
  let component: MateriaNaoEncontradaComponent;
  let fixture: ComponentFixture<MateriaNaoEncontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MateriaNaoEncontradaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MateriaNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
