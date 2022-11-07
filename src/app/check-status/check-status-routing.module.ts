import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckStatusPage } from './check-status.page';

const routes: Routes = [
  {
    path: '',
    component: CheckStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckStatusPageRoutingModule {}
