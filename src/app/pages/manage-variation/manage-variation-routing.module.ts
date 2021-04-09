import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageVariationComponent } from './manage-variation.component';


const routes: Routes = [
  {
    path: '',
    component: ManageVariationComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageVariationRoutingModule { }
