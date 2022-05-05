import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { AhorcadoComponent } from './components/proyectos/ahorcado/ahorcado.component';
import { ChoHanComponent } from './components/proyectos/cho-han/cho-han.component';
import { ECommerceComponent } from './components/proyectos/e-commerce/e-commerce.component';
import { EncriptadorComponent } from './components/proyectos/encriptador/encriptador.component';
import { RouterModule, Routes } from '@angular/router';

const appRouts: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lenguajes', component: LenguajesComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FooterComponent,
    HomeComponent,
    ContactoComponent,
    ProyectosComponent,
    LenguajesComponent,
    AhorcadoComponent,
    ChoHanComponent,
    ECommerceComponent,
    EncriptadorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
