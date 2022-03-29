import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AndroidstudioPageRoutingModule } from './androidstudio-routing.module';

import { AndroidstudioPage } from './androidstudio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AndroidstudioPageRoutingModule
  ],
  declarations: [AndroidstudioPage]
})
export class AndroidstudioPageModule {}
