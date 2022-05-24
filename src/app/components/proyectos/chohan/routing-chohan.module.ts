import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ChohanComponent } from './chohan.component';

const rutasChohan: Routes = [{ path: '', component: ChohanComponent }];

@NgModule({
  declarations: [ChohanComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(rutasChohan),
  ],
  exports: [RouterModule],
})
export class RoutingChohanModule {}
