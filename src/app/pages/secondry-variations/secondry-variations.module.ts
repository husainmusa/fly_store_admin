import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondryVariationsRoutingModule } from './secondry-variations-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecondryVariationsComponent } from './secondry-variations.component';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [SecondryVariationsComponent],
  imports: [
    CommonModule,
    SecondryVariationsRoutingModule,
    NgxPrintModule,
    SharedModule
  ]
})
export class SecondryVariationsModule { }
