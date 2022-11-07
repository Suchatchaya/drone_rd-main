import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mission1PageRoutingModule } from './mission1-routing.module';

import { Mission1Page } from './mission1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mission1PageRoutingModule
  ],
  declarations: [Mission1Page]
})
export class Mission1PageModule {}
