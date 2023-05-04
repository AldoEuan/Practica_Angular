import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapsRoutingModule } from './caps-routing.module';
import { CapsComponent } from './components/caps/caps.component';


@NgModule({
  declarations: [
    CapsComponent
  ],
  imports: [
    CommonModule,
    CapsRoutingModule
  ]
})
export class CapsModule { }
