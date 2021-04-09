import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageSecondryVariationsComponent } from './manage-secondry-variations.component';


const routes: Routes = [
  {
    path: '',
    component: ManageSecondryVariationsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageSecondryVariationsRoutingModule { }
