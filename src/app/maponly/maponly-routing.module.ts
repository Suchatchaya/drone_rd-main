import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaponlyPage } from './maponly.page';

const routes: Routes = [
  {
    path: '',
    component: MaponlyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaponlyPageRoutingModule {}
