import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-info',
  templateUrl: './search-info.page.html',
  styleUrls: ['./search-info.page.scss'],
})
export class SearchInfoPage{
  constructor(private modalController:ModalController){}
  
  volver(){
    this.modalController.dismiss();
  }
}
