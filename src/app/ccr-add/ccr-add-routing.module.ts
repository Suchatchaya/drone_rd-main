import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CcrAddPage } from './ccr-add.page';

const routes: Routes = [
  {
    path: '',
    component: CcrAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CcrAddPageRoutingModule {}
