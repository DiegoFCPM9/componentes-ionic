import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextareaPageRoutingModule } from './textarea-routing.module';

import { TextareaPage } from './textarea.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    IonicModule,
    TextareaPageRoutingModule,
    ComponentsModule
  ],
  declarations:[TextareaPage]
})
export class TextareaPageModule{}
