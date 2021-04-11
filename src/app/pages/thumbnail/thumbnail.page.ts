import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.page.html',
  styleUrls: ['./thumbnail.page.scss'],
})
export class ThumbnailPage{
  constructor(private alertController:AlertController){}

  clickInfo(){
    this.presentInfo();
  }
  async presentInfo(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente Thumbnail',
      subHeader: 'Traducido por Google.',
      message: 'Los thumbnail son componentes cuadrados que normalmente envuelven una imagen o un icono. Se pueden utilizar para facilitar la visualización de un grupo de imágenes más grandes o para proporcionar una vista previa de la imagen a tamaño completo. Las miniaturas se pueden utilizar solas o dentro de cualquier elemento. Si se coloca dentro de un elemento de iones, la miniatura cambiará de tamaño para adaptarse al componente principal. Para colocar una miniatura en el lado izquierdo o derecho de un elemento, configure el espacio para comenzar o finalizar, respectivamente.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
}
