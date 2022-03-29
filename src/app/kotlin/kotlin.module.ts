import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KotlinPageRoutingModule } from './kotlin-routing.module';

import { KotlinPage } from './kotlin.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KotlinPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [KotlinPage]
})
export class KotlinPageModule {}
