import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { RouterModule, Routes } from '@angular/router';
import { EncriptadorComponent } from './components/proyectos/encriptador/encriptador.component';
import { ClipboardModule } from 'ngx-clipboard';
import { ReactiveFormsModule } from '@angular/forms';

const appRouts: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lenguajes', component: LenguajesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyectos/encriptador', component: EncriptadorComponent },
  {
    path: 'proyectos/ahorcado',
    loadChildren: () =>
      import('./components/proyectos/ahorcado/ahorcado.module').then(
        (m) => m.AhorcadoModule
      ),
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    EncriptadorComponent,
    HomeComponent,
    ContactoComponent,
    ProyectosComponent,
    LenguajesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouts),
    ClipboardModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class RoutingAppModule {}
