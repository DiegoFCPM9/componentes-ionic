import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TogglePageRoutingModule } from './toggle-routing.module';

import { TogglePage } from './toggle.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TogglePageRoutingModule,
    ComponentsModule
  ],
  declarations: [TogglePage]
})
export class TogglePageModule {}
