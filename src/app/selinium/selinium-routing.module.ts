import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeliniumPage } from './selinium.page';

const routes: Routes = [
  {
    path: '',
    component: SeliniumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeliniumPageRoutingModule {}
