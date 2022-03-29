import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RasingskPageRoutingModule } from './rasingsk-routing.module';

import { RasingskPage } from './rasingsk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RasingskPageRoutingModule
  ],
  declarations: [RasingskPage]
})
export class RasingskPageModule {}
