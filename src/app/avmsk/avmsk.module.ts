import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvmskPageRoutingModule } from './avmsk-routing.module';

import { AvmskPage } from './avmsk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvmskPageRoutingModule
  ],
  declarations: [AvmskPage]
})
export class AvmskPageModule {}
