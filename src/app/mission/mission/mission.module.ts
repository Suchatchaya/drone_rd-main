import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissionPageRoutingModule } from './mission-routing.module';

import { MissionPage } from './mission.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MissionPageRoutingModule],
  declarations: [MissionPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MissionPageModule {}
