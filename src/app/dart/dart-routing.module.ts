import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DartPage } from './dart.page';

const routes: Routes = [
  {
    path: '',
    component: DartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DartPageRoutingModule {}
