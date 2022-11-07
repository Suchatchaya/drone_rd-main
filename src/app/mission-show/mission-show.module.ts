import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissionShowPageRoutingModule } from './mission-show-routing.module';

import { MissionShowPage } from './mission-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissionShowPageRoutingModule
  ],
  declarations: [MissionShowPage]
})
export class MissionShowPageModule {}
