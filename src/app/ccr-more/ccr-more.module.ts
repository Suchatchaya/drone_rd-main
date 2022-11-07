import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CcrMorePageRoutingModule } from './ccr-more-routing.module';

import { CcrMorePage } from './ccr-more.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CcrMorePageRoutingModule
  ],
  declarations: [CcrMorePage]
})
export class CcrMorePageModule {}
