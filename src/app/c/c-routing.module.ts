import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CPage } from './c.page';

const routes: Routes = [
  {
    path: '',
    component: CPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CPageRoutingModule {}
