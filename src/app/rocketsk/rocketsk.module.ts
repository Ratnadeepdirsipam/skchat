import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RocketskPageRoutingModule } from './rocketsk-routing.module';

import { RocketskPage } from './rocketsk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RocketskPageRoutingModule
  ],
  declarations: [RocketskPage]
})
export class RocketskPageModule {}
