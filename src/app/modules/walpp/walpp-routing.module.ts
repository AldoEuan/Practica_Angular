import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalppModule } from './walpp.module';
import { WalppComponent } from './components/walpp/walpp.component';

const routes: Routes = [
  {
    path:'',
    component:WalppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalppRoutingModule { }
