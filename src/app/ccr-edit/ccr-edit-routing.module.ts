import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CcrEditPage } from './ccr-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CcrEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CcrEditPageRoutingModule {}
