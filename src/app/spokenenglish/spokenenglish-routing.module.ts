import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpokenenglishPage } from './spokenenglish.page';

const routes: Routes = [
  {
    path: '',
    component: SpokenenglishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpokenenglishPageRoutingModule {}
