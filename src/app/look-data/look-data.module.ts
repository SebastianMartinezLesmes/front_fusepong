import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LookDataPage } from './look-data.page';

import { LookDataPageRoutingModule } from './look-data-routing.module';


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
