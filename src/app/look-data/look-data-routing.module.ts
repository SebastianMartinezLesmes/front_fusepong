import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LookDataPage } from './look-data.page';

const routes: Routes = [
  {
    path: '',
    component: LookDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LookDataPageRoutingModule {}
