import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage{
  constructor(private alertController:AlertController){}

  clickInfo(){
    this.presentInfo();
  }
  async presentInfo(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente Chip',
      subHeader: 'Traducido por Google.',
      message: 'La cuadrícula es un poderoso sistema de caja flexible para dispositivos móviles para crear diseños personalizados.<br>Se compone de tres unidades: una cuadrícula, fila (s) y columna (s). Las columnas se expandirán para llenar la fila y cambiarán de tamaño para adaptarse a columnas adicionales. Se basa en un diseño de 12 columnas con diferentes puntos de interrupción según el tamaño de la pantalla. El número de columnas se puede personalizar mediante CSS.<br>Consulte la documentación de Responsive Grid para obtener más información.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
}
