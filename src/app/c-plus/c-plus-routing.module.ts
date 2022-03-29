import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CPlusPage } from './c-plus.page';

const routes: Routes = [
  {
    path: '',
    component: CPlusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CPlusPageRoutingModule {}
