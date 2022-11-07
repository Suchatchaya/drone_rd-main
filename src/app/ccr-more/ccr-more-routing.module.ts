import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CcrMorePage } from './ccr-more.page';

const routes: Routes = [
  {
    path: '',
    component: CcrMorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CcrMorePageRoutingModule {}
