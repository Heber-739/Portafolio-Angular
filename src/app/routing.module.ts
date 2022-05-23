import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { RouterModule, Routes } from '@angular/router';
import { EncriptadorComponent } from './components/proyectos/encriptador/encriptador.component';

const appRouts: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'lenguajes',
    component: LenguajesComponent,
  },
  { path: 'contacto', component: ContactoComponent },
  {
    path: 'proyectos',
    component: ProyectosComponent,
    children: [{ path: 'encriptador', component: EncriptadorComponent }],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent,
    ProyectosComponent,
    LenguajesComponent,
    EncriptadorComponent,
  ],
  imports: [CommonModule, RouterModule.forRoot(appRouts)],
  exports: [RouterModule],
})
export class RoutingModule {}
