import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MlalistPageRoutingModule } from './mlalist-routing.module';

import { MlalistPage } from './mlalist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MlalistPageRoutingModule
  ],
  declarations: [MlalistPage]
})
export class MlalistPageModule {}
