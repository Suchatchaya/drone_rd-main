import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mission2Page } from './mission2.page';

const routes: Routes = [
  {
    path: '',
    component: Mission2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mission2PageRoutingModule {}
