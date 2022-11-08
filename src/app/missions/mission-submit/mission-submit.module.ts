import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissionSubmitPageRoutingModule } from './mission-submit-routing.module';

import { MissionSubmitPage } from './mission-submit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissionSubmitPageRoutingModule
  ],
  declarations: [MissionSubmitPage]
})
export class MissionSubmitPageModule {}
