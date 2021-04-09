import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageVariationRoutingModule } from './manage-variation-routing.module';
import { ManageVariationComponent } from './manage-variation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ManageVariationComponent],
  imports: [
    CommonModule,
    ManageVariationRoutingModule,
    SharedModule
  ]
})
export class ManageVariationModule { }
