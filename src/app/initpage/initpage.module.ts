import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InitpagePage } from './initpage.page';

import { InitpagePageRoutingModule } from './initpage-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitpagePageRoutingModule
  ],
  declarations: [InitpagePage]
})
export class InitpagePageModule {}
