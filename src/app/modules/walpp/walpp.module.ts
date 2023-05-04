import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalppRoutingModule } from './walpp-routing.module';
import { WalppComponent } from './components/walpp/walpp.component';


@NgModule({
  declarations: [
    WalppComponent
  ],
  imports: [
    CommonModule,
    WalppRoutingModule
  ]
})
export class WalppModule { }
