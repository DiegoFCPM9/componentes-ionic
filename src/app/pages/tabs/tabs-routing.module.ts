import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes:Routes=[
  {
    path:'',
    redirectTo:'/tabs/chip',
    pathMatch:'full'
  },{
    path: '',
    component: TabsPage,
    children:[
      {
        path:'chip',
        loadChildren:()=>import('../chip/chip.module').then(mpg=>mpg.ChipPageModule)
      },{
        path:'cards',
        loadChildren:()=>import('../card/card.module').then(mpg=>mpg.CardPageModule)
      },{
        path:'scroll',
        loadChildren:()=>import('../infinite-scroll/infinite-scroll.module').then(mpg=>mpg.InfiniteScrollPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
