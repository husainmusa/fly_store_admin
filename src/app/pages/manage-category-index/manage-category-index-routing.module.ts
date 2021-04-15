import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageCategoryIndexComponent } from './manage-category-index.component';


const routes: Routes = [
  {
    path: '',
    component: ManageCategoryIndexComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCategoryIndexRoutingModule { }
