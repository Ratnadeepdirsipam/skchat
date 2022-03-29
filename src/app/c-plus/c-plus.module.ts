import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CPlusPageRoutingModule } from './c-plus-routing.module';

import { CPlusPage } from './c-plus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CPlusPageRoutingModule
  ],
  declarations: [CPlusPage]
})
export class CPlusPageModule {}
