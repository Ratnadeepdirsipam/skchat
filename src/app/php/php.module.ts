import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhpPageRoutingModule } from './php-routing.module';

import { PhpPage } from './php.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhpPageRoutingModule
  ],
  declarations: [PhpPage]
})
export class PhpPageModule {}
