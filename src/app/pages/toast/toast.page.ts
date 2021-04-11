import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage{
  constructor(public toastController:ToastController, private alertController:AlertController){}
  async presentToast(){
    const toast=await this.toastController.create({
      message: 'Tus nuevas configuraciones se han aplicado.',
      duration: 3000
    });
    toast.present();
  }
  async presentToastWithOptions(){
    const toast=await this.toastController.create({
      header: 'Nuevo Favorito',
      message: 'Click para confirmar',
      position: 'top', //middle, bottom.
      mode: 'ios',
      color: 'success',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Fav',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async presentInfo(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente toass',
      subHeader: 'Traducido por Google.',
      message: 'El toast es una notificación sutil que se usa comúnmente en aplicaciones modernas. Se puede utilizar para proporcionar información sobre una operación o para mostrar un mensaje del sistema. El brindis aparece en la parte superior del contenido de la aplicación y la aplicación puede descartarlo para reanudar la interacción del usuario con la aplicación.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
}
