import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MateriasService } from './materias/materias.service';
import { MateriasModule } from './materias/materias.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MateriasModule
  ],
  providers: [MateriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
