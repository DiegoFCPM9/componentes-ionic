import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path: 'index',
    loadChildren:()=>import('./pages/index/index.module').then(mpg=>mpg.IndexPageModule)
  },{
    path: 'alert',
    loadChildren:()=>import('./pages/alert/alert.module').then(mpg=>mpg.AlertPageModule)
  },{
    path: 'action-sheet',
    loadChildren:()=>import('./pages/action-sheet/action-sheet.module').then(mpg=>mpg.ActionSheetPageModule)
  },{
    path: 'avatar',
    loadChildren:()=>import('./pages/avatar/avatar.module').then(mpg=>mpg.AvatarPageModule)
  },{
    path: 'backdrop',
    loadChildren:()=>import('./pages/backdrop/backdrop.module').then(mpg=>mpg.BackdropPageModule)
  },{
    path: 'badge',
    loadChildren:()=>import('./pages/badge/badge.module').then(mpg=>mpg.BadgePageModule)
  },{
    path: 'button',
    loadChildren:()=>import('./pages/button/button.module').then(mpg=>mpg.ButtonPageModule)
  },{
    path: 'card',
    loadChildren:()=>import('./pages/card/card.module').then(mpg=>mpg.CardPageModule)
  },{
    path: 'checkbox',
    loadChildren:()=>import('./pages/checkbox/checkbox.module').then(mpg=>mpg.CheckboxPageModule)
  },{
    path: 'chip',
    loadChildren:()=>import('./pages/chip/chip.module').then(mpg=>mpg.ChipPageModule)
  },{
    path: 'datetime',
    loadChildren:()=>import('./pages/datetime/datetime.module').then(mpg=>mpg.DatetimePageModule)
  },{
    path: 'fab',
    loadChildren:()=>import('./pages/fab/fab.module').then(mpg=>mpg.FabPageModule)
  },{
    path: 'grid',
    loadChildren:()=>import('./pages/grid/grid.module').then(mpg=>mpg.GridPageModule)
  },{
    path: 'infinite-scroll',
    loadChildren:()=>import('./pages/infinite-scroll/infinite-scroll.module').then(mpg=>mpg.InfiniteScrollPageModule)
  },{
    path: 'input',
    loadChildren:()=>import('./pages/input/input.module').then(mpg=>mpg.InputPageModule)
  },{
    path: 'item',
    loadChildren:()=>import('./pages/item/item.module').then(mpg=>mpg.ItemPageModule)
  },{
    path: 'list',
    loadChildren:()=>import('./pages/list/list.module').then(mpg=>mpg.ListPageModule)
  },{
    path: 'loading',
    loadChildren:()=>import('./pages/loading/loading.module').then(mpg=>mpg.LoadingPageModule)
  },{
    path: 'menu',
    loadChildren:()=>import('./pages/menu/menu.module').then(mpg=>mpg.MenuPageModule)
  },{
    path: 'modal',
    loadChildren:()=>import('./pages/modal/modal.module').then(mpg=>mpg.ModalPageModule)
  },{
    path: 'note',
    loadChildren:()=>import('./pages/note/note.module').then(mpg=>mpg.NotePageModule)
  },{
    path: 'picker',
    loadChildren:()=>import('./pages/picker/picker.module').then(mpg=>mpg.PickerPageModule)
  },{
    path: 'popover',
    loadChildren:()=>import('./pages/popover/popover.module').then(mpg=>mpg.PopoverPageModule)
  },{
    path: 'progress-bar',
    loadChildren:()=>import('./pages/progress-bar/progress-bar.module').then(mpg=>mpg.ProgressBarPageModule)
  },{
    path: 'radio',
    loadChildren:()=>import('./pages/radio/radio.module').then(mpg=>mpg.RadioPageModule)
  },{
    path: 'range',
    loadChildren:()=>import('./pages/range/range.module').then(mpg=>mpg.RangePageModule)
  },{
    path: 'refresher',
    loadChildren:()=>import('./pages/refresher/refresher.module').then(mpg=>mpg.RefresherPageModule)
  },{
    path: 'reorder',
    loadChildren:()=>import('./pages/reorder/reorder.module').then(mpg=>mpg.ReorderPageModule)
  },{
    path: 'search',
    loadChildren:()=>import('./pages/search/search.module').then(mpg=>mpg.SearchPageModule)
  },{
    path: 'segment',
    loadChildren:()=>import('./pages/segment/segment.module').then(mpg=>mpg.SegmentPageModule)
  },{
    path: 'select',
    loadChildren:()=>import('./pages/select/select.module').then(mpg=>mpg.SelectPageModule)
  },{
    path: 'skeleton-text',
    loadChildren:()=>import('./pages/skeleton-text/skeleton-text.module').then(mpg=>mpg.SkeletonTextPageModule)
  },{
    path: 'slides',
    loadChildren:()=> import('./pages/slides/slides.module').then(mpg=>mpg.SlidesPageModule)
  },{
    path: 'spinner',
    loadChildren:()=>import('./pages/spinner/spinner.module').then(mpg=>mpg.SpinnerPageModule)
  },{
    path: 'tabs',
    loadChildren:()=>import('./pages/tabs/tabs.module').then(mpg=>mpg.TabsPageModule)
  },{
    path: 'textarea',
    loadChildren:()=>import('./pages/textarea/textarea.module').then(mpg=>mpg.TextareaPageModule)
  },{
    path: 'thumbnail',
    loadChildren:()=>import('./pages/thumbnail/thumbnail.module').then(mpg=>mpg.ThumbnailPageModule)
  },{
    path: 'toast',
    loadChildren:()=>import('./pages/toast/toast.module').then(mpg=>mpg.ToastPageModule)
  },{
    path: 'toggle',
    loadChildren:()=>import('./pages/toggle/toggle.module').then(mpg=>mpg.TogglePageModule)
  },{
    path: 'toolbar',
    loadChildren:()=>import('./pages/toolbar/toolbar.module').then(mpg=>mpg.ToolbarPageModule)
  },{
    path: 'virtual-scroll',
    loadChildren:()=>import('./pages/virtual-scroll/virtual-scroll.module').then(mpg=>mpg.VirtualScrollPageModule)
  },{
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },{
    path: '**',
    redirectTo: 'index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy:PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
