import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.page.html',
  styleUrls: ['./backdrop.page.scss'],
})
export class BackdropPage{
  constructor(private alertController:AlertController){}

  clickInfo(){
    this.presentInfo();
  }
  async presentInfo(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente Backdrop',
      subHeader: 'Traducido por Google.',
      message: 'Backdrops son componentes de pantalla completa que se superponen a otros componentes. Son útiles detrás de los componentes que hacen la transición sobre otro contenido y se pueden usar para descartar ese componente.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
}
