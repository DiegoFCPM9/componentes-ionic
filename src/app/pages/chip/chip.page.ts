import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.page.html',
  styleUrls: ['./chip.page.scss'],
})
export class ChipPage{
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
      message: 'Los chips representan entidades complejas en pequeños bloques, como un contacto. Un chip puede contener varios elementos diferentes, como avatares, texto e iconos.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
}
