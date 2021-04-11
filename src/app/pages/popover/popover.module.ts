import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPageRoutingModule } from './popover-routing.module';

import { PopoverPage } from './popover.page';
import { PopoverComponentModule } from './popover-module/popover-component.module';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPageRoutingModule,
    PopoverComponentModule
  ],
  declarations:[PopoverPage]
})
export class PopoverPageModule{}
