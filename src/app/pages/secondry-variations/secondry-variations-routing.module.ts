import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondryVariationsComponent } from './secondry-variations.component';

const routes: Routes = [
  {
    path: '',
    component: SecondryVariationsComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondryVariationsRoutingModule { }
