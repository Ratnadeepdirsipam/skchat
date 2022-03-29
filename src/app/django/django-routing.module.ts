import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DjangoPage } from './django.page';

const routes: Routes = [
  {
    path: '',
    component: DjangoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DjangoPageRoutingModule {}
