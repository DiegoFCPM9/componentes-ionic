import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

const routes:Routes=[
  {
    path: '',
    component:MenuComponent
  }
];

@NgModule({
  declarations:[
    HeaderComponent,
    MenuComponent
  ],
  imports:[
    RouterModule.forChild(routes),
    CommonModule,
    IonicModule
  ],
  exports:[
    RouterModule,
    HeaderComponent,
    MenuComponent
  ]
})
export class ComponentsModule{}