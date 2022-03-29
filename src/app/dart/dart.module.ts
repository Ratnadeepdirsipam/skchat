import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DartPageRoutingModule } from './dart-routing.module';

import { DartPage } from './dart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DartPageRoutingModule
  ],
  declarations: [DartPage]
})
export class DartPageModule {}
