import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevopsPageRoutingModule } from './devops-routing.module';

import { DevopsPage } from './devops.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevopsPageRoutingModule
  ],
  declarations: [DevopsPage]
})
export class DevopsPageModule {}
