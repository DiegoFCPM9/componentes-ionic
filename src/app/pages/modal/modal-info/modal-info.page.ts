import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage{
  @Input()nombre:string;
  @Input()pais:string;

  constructor(private modalController:ModalController){}

  salirSinArgumentos(){
    this.modalController.dismiss();
    console.log(this.nombre);
  }
  salirConArgumentos(){
    this.modalController.dismiss({
      nombre:'Felipe',
      pais:'URSS'
    });
  }
}