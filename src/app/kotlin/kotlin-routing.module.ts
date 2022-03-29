import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KotlinPage } from './kotlin.page';

const routes: Routes = [
  {
    path: '',
    component: KotlinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KotlinPageRoutingModule {}
