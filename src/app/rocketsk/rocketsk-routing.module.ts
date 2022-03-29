import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RocketskPage } from './rocketsk.page';

const routes: Routes = [
  {
    path: '',
    component: RocketskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RocketskPageRoutingModule {}
