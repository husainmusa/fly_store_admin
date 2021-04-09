import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariationsRoutingModule } from './variations-routing.module';
import { VariationsComponent } from './variations.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [VariationsComponent],
  imports: [
    CommonModule,
    VariationsRoutingModule,
    SharedModule,
    NgxPrintModule
  ]
})
export class VariationsModule { }
