import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CcrListPageRoutingModule } from './ccr-list-routing.module';

import { CcrListPage } from './ccr-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CcrListPageRoutingModule
  ],
  declarations: [CcrListPage]
})
export class CcrListPageModule {}
