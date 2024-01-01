import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MateriasComponent } from './materias/materias.component';
import { MateriaDetalheComponent } from './materia-detalhe/materia-detalhe.component';
import { MateriasService } from './materias/materias.service';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MateriasComponent,
    MateriaDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [MateriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
