import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CcrAddPageRoutingModule } from './ccr-add-routing.module';

import { CcrAddPage } from './ccr-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CcrAddPageRoutingModule
  ],
  declarations: [CcrAddPage]
})
export class CcrAddPageModule {}
