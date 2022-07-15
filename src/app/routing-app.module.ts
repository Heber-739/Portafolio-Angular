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
import { PreloadModuleService } from './preload-module.service';
import { LocalStorageService } from './local-storage.service';
import { TemasService } from './temas.service';
import { FirebaseService } from './firebase.service';
import { HttpClientModule } from '@angular/common/http';

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
    data: { preload: true },
  },
  {
    path: 'proyectos/chohan',
    loadChildren: () =>
      import('./components/proyectos/chohan/chohan.module').then(
        (m) => m.ChohanModule
      ),
    data: { preload: true },
  },
  {
    path: 'proyectos/ecommerce',
    loadChildren: () =>
      import('./components/proyectos/ecommerce/ecommerce.module').then(
        (m) => m.EcommerceModule
      ),
    data: { preload: true },
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
    ClipboardModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouts, {
      preloadingStrategy: PreloadModuleService,
    }),
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [LocalStorageService, TemasService, FirebaseService],
})
export class RoutingAppModule {}
