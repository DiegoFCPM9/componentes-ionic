import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirtualScrollPageRoutingModule } from './virtual-scroll-routing.module';

import { VirtualScrollPage } from './virtual-scroll.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirtualScrollPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VirtualScrollPage]
})
export class VirtualScrollPageModule {}
