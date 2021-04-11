import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverInfoComponent } from '../popover-info/popover-info.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations:[PopoverInfoComponent],
  imports:[CommonModule, IonicModule],
  exports:[PopoverInfoComponent]
})
export class PopoverComponentModule{}
