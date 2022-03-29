import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DjangoPageRoutingModule } from './django-routing.module';

import { DjangoPage } from './django.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DjangoPageRoutingModule
  ],
  declarations: [DjangoPage]
})
export class DjangoPageModule {}
