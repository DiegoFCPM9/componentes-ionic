import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.page.html',
  styleUrls: ['./toolbar.page.scss'],
})
export class ToolbarPage{
  constructor(private alertController:AlertController){}

  async presentInfo(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente toolbar',
      subHeader: 'Traducido por Google.',
      message: 'Toolbars se colocan encima o debajo del contenido. Cuando una barra de herramientas se coloca en un <ion-header>, aparecerá fija en la parte superior del contenido, y cuando está en un <ion-footer>, aparecerá fija en la parte inferior. El contenido de pantalla completa se desplazará detrás de una barra de herramientas en un encabezado o pie de página. Cuando se coloca dentro de un <ion-content>, las barras de herramientas se desplazarán con el contenido.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
}
