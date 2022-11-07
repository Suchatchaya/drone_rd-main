import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mission2PageRoutingModule } from './mission2-routing.module';

import { Mission2Page } from './mission2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mission2PageRoutingModule
  ],
  declarations: [Mission2Page]
})
export class Mission2PageModule {}
