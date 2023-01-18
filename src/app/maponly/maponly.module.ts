import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaponlyPageRoutingModule } from './maponly-routing.module';

import { MaponlyPage } from './maponly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaponlyPageRoutingModule
  ],
  declarations: [MaponlyPage]
})
export class MaponlyPageModule {}
