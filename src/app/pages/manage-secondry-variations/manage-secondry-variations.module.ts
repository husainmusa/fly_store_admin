import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageSecondryVariationsRoutingModule } from './manage-secondry-variations-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPrintModule } from 'ngx-print';
import { ManageSecondryVariationsComponent } from './manage-secondry-variations.component';

@NgModule({
  declarations: [ManageSecondryVariationsComponent],
  imports: [
    CommonModule,
    ManageSecondryVariationsRoutingModule,
    SharedModule,
    NgxPrintModule
  ]
})
export class ManageSecondryVariationsModule { }
