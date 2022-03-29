import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpokenenglishPageRoutingModule } from './spokenenglish-routing.module';

import { SpokenenglishPage } from './spokenenglish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpokenenglishPageRoutingModule
  ],
  declarations: [SpokenenglishPage]
})
export class SpokenenglishPageModule {}
