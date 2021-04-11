import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackdropPageRoutingModule } from './backdrop-routing.module';

import { BackdropPage } from './backdrop.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackdropPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BackdropPage]
})
export class BackdropPageModule {}
