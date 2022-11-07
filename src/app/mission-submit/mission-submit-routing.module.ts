import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionSubmitPage } from './mission-submit.page';

const routes: Routes = [
  {
    path: '',
    component: MissionSubmitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionSubmitPageRoutingModule {}
