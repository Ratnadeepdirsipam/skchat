import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegandloginPage } from './regandlogin.page';

const routes: Routes = [
  {
    path: '',
    component: RegandloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegandloginPageRoutingModule {}
