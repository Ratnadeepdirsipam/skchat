import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavaPage } from './java.page';

const routes: Routes = [
  {
    path: '',
    component: JavaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavaPageRoutingModule {}
