import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})
export class BadgePage implements OnInit{
  constructor(private alertController:AlertController){}

  ngOnInit(){
  }

  clickInfo(){
    this.presentInfo();
  }
  async presentInfo(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente Badge',
      subHeader: 'Traducido por Google.',
      message: 'Los badges son elementos de bloque en línea que suelen aparecer cerca de otro elemento. Normalmente contienen un número u otros caracteres. Se pueden usar como una notificación de que hay elementos adicionales asociados con un elemento e indicar cuántos elementos hay.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
}
