import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageCategoryIndexRoutingModule } from './manage-category-index-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPrintModule } from 'ngx-print';
import { ManageCategoryIndexComponent } from './manage-category-index.component';


@NgModule({
  declarations: [ManageCategoryIndexComponent],
  imports: [
    CommonModule,
    NgxPrintModule,
    SharedModule,
    ManageCategoryIndexRoutingModule
  ]
})
export class ManageCategoryIndexModule { }
