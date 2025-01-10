import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LookDataPageRoutingModule } from './look-data-routing.module';

import { LookDataPage } from './look-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LookDataPageRoutingModule
  ],
  declarations: [LookDataPage]
})
export class LookDataPageModule {}
