import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage{
  constructor(private alertController:AlertController){}

  clickInfo(){
    this.presentInfo();
  }
  async presentInfo(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente Note',
      subHeader: 'Traducido por Google.',
      message: 'Las notas son elementos de texto que generalmente se utilizan como subtítulos que proporcionan más información. Las notas tienen un estilo que aparece en gris de forma predeterminada. Las notas se pueden utilizar en un elemento como texto de metadatos.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
}
