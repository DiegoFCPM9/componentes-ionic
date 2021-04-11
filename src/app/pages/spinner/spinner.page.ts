import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.page.html',
  styleUrls: ['./spinner.page.scss'],
})
export class SpinnerPage{

  constructor(private alertController:AlertController){}

  clickInfo(){
    this.presentInfo();
  }
  async presentInfo(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente spinner.',
      subHeader: 'Traducido por Google.',
      message: 'El componente spinner proporciona una variedad de spinners SVG animados. Los spinners son indicadores visuales de que la aplicación está cargando contenido o realizando otro proceso que el usuario debe esperar. El spinner predeterminado para usar se basa en la plataforma. El spinner predeterminado para ios es "lines", y la predeterminado para Android es "crescent". Si la plataforma no es ios o android, el spinner se establecerá de forma predeterminada en crecent. Si se establece la propiedad de nombre, entonces se utilizará ese spinner en lugar del spinner específico de la plataforma.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
}
