import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage{
  constructor(private loadingController:LoadingController){}

  mostrarLoading(type:number, message:string){
    switch(type){
      case 1:
        this.presentLoading(message);
        break;
      case 2:
        this.presentLoadingWithOptions(message);
        break;
      default:
        break;
    }

    setTimeout(()=>{
      this.loading.dismiss();
    }, 3000);
  }

  loading:HTMLIonLoadingElement;
  async presentLoading(message:string){
    this.loading=await this.loadingController.create({
      message: message,
    });
    await this.loading.present();
  }
  async presentLoadingWithOptions(message:string){
    this.loading=await this.loadingController.create({
      //'bubbles', 'circles', 'circular', 'crescent', 'dots', 'lines', 'lines-small'.
      spinner: null,
      message: message,
      translucent: true,
      //duration: 5000,
      backdropDismiss: true//,
      //cssClass: 'custom-class custom-loading'
    });
    await this.loading.present();

    const option=await this.loading.onDidDismiss();
    console.log('Loading Cancelado.');
  }
}