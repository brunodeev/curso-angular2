import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meu-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meu-form.component.html',
  styleUrl: './meu-form.component.css'
})
export class MeuFormComponent {
  nome: string = "abc";

  pessoa: any = {
    nome: "bruno",
    idade: 19,
  }
}
