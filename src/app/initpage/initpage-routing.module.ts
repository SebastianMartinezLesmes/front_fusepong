import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitpagePage } from './initpage.page';

const routes: Routes = [
  {
    path: '',
    component: InitpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitpagePageRoutingModule {}
