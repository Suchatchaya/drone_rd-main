import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CcrEditPageRoutingModule } from './ccr-edit-routing.module';

import { CcrEditPage } from './ccr-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CcrEditPageRoutingModule
  ],
  declarations: [CcrEditPage]
})
export class CcrEditPageModule {}
