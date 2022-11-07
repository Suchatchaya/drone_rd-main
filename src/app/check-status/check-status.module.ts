import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckStatusPageRoutingModule } from './check-status-routing.module';

import { CheckStatusPage } from './check-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckStatusPageRoutingModule
  ],
  declarations: [CheckStatusPage]
})
export class CheckStatusPageModule {}
