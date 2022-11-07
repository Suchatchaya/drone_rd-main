import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mission1Page } from './mission1.page';

const routes: Routes = [
  {
    path: '',
    component: Mission1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mission1PageRoutingModule {}
