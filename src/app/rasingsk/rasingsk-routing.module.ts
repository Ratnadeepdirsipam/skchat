import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RasingskPage } from './rasingsk.page';

const routes: Routes = [
  {
    path: '',
    component: RasingskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RasingskPageRoutingModule {}
