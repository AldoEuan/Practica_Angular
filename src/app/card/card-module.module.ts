import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModuleRoutingModule } from './card-module-routing.module';
import { CardComponent } from './card.component';


@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    CardModuleRoutingModule
  ]
})
export class CardModuleModule { }
