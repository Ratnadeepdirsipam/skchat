import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JavaPageRoutingModule } from './java-routing.module';
import { IonicSelectableModule } from 'ionic-selectable';
import { JavaPage } from './java.page';

@NgModule({
  imports: [
    IonicSelectableModule,
    CommonModule,
    FormsModule,
    IonicModule,
    JavaPageRoutingModule
  ],
  declarations: [JavaPage]
})
export class JavaPageModule {}
