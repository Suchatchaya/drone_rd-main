import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionShowPage } from './mission-show.page';

const routes: Routes = [
  {
    path: '',
    component: MissionShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionShowPageRoutingModule {}
