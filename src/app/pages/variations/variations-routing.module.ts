import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariationsComponent } from './variations.component';



const routes: Routes = [
  {
    path: '',
    component: VariationsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VariationsRoutingModule { }
