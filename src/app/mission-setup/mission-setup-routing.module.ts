import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionSetupPage } from './mission-setup.page';

const routes: Routes = [
  {
    path: '',
    component: MissionSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionSetupPageRoutingModule {}
