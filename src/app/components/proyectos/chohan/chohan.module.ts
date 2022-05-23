import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChohanComponent } from './chohan.component';

const rutasCH: Routes = [{ path: '', component: ChohanComponent }];

@NgModule({
  declarations: [ChohanComponent],
  imports: [CommonModule, RouterModule.forRoot(rutasCH)],
  exports: [RouterModule],
})
export class ChohanModule {}
