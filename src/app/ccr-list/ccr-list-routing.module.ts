import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CcrListPage } from './ccr-list.page';

const routes: Routes = [
  {
    path: '',
    component: CcrListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CcrListPageRoutingModule {}
