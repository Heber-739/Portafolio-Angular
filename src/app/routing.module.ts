import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { RouterModule, Routes } from '@angular/router';

const appRouts: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lenguajes', component: LenguajesComponent },
  { path: 'contacto', component: ContactoComponent },
  {
    path: 'proyectos',
    loadChildren: () =>
      import('./components/proyectos/proyectos.module').then(
        (m) => m.ProyectosModule
      ),
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent,
    ProyectosComponent,
    LenguajesComponent,
  ],
  imports: [CommonModule, RouterModule.forRoot(appRouts)],
  exports: [RouterModule],
})
export class RoutingModule {}
