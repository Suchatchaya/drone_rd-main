import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissionSetupPageRoutingModule } from './mission-setup-routing.module';

import { MissionSetupPage } from './mission-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissionSetupPageRoutingModule
  ],
  declarations: [MissionSetupPage]
})
export class MissionSetupPageModule {}
