import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegandloginPageRoutingModule } from './regandlogin-routing.module';

import { RegandloginPage } from './regandlogin.page';

//registrationForm: FormGroup
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegandloginPageRoutingModule
  ],
  declarations: [RegandloginPage]
})
export class RegandloginPageModule {}
