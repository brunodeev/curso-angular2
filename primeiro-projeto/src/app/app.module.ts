import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosService } from './cursos/cursos.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiro2Component,
    MeuPrimeiroComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CursosModule
  ],
  providers: [
    CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
