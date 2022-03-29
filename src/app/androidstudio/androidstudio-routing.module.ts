import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndroidstudioPage } from './androidstudio.page';

const routes: Routes = [
  {
    path: '',
    component: AndroidstudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndroidstudioPageRoutingModule {}
