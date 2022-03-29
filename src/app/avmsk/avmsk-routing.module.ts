import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvmskPage } from './avmsk.page';

const routes: Routes = [
  {
    path: '',
    component: AvmskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvmskPageRoutingModule {}
