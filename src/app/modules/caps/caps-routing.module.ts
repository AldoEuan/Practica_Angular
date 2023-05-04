import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsComponent } from './components/caps/caps.component';

const routes: Routes = [
  {
    path:'',
    component:  CapsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapsRoutingModule { }
