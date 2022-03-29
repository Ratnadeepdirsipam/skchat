import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhpPage } from './php.page';

const routes: Routes = [
  {
    path: '',
    component: PhpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhpPageRoutingModule {}
