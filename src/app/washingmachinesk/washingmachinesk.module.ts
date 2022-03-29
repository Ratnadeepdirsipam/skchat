import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WashingmachineskPageRoutingModule } from './washingmachinesk-routing.module';

import { WashingmachineskPage } from './washingmachinesk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashingmachineskPageRoutingModule
  ],
  declarations: [WashingmachineskPage]
})
export class WashingmachineskPageModule {}
