import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls:['./list.page.scss'],
})
export class ListPage implements OnInit{
  constructor(private dataService:DataService, private alertController:AlertController){}

  users:Observable<any>;

  @ViewChild(IonList)ionList:IonList;

  ngOnInit(){
    this.users=this.dataService.getUserList();
  }

  favorite(option:any){
    console.log('Favorito: ', option);
    this.ionList.closeSlidingItems();
  }
  share(option:any){
    console.log('Compartir: ', option);
    this.ionList.closeSlidingItems();
  }
  delete(option:any){
    console.log('Borrar', option);
    this.ionList.closeSlidingItems();
  }

  clickInfo(){
    this.presentInfo();
  }
  async presentInfo(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente List',
      subHeader: '¿Qué estás viendo?',
      message: 'Trae datos en formato JSON de la web y los enseña en una lista.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
}
