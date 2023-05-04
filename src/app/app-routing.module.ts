
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./card/card-module.module').then((m) => m.CardModuleModule),
  },
  {
    path: 'caps',
    loadChildren: () =>
      import('./modules/caps/caps.module').then(
        (modules) => modules.CapsModule
      ),
  },
  {
    path: 'walpp',
    loadChildren: () =>
      import('./modules/walpp/walpp.module').then(
        (modules) => modules.WalppModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
