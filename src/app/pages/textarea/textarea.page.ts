import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.page.html',
  styleUrls:['./textarea.page.scss'],
})
export class TextareaPage{
  constructor(private alertController:AlertController){}

  clickInfo(){
    this.presentInfo();
  }
  async presentInfo(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente Textarea',
      subHeader: 'Traducido por Google.',
      message: 'El componente textarea se utiliza para la entrada de texto de varias líneas. Un elemento de área de texto nativo se representa dentro del componente. La experiencia del usuario y la interactividad del componente textarea se mejoran al tener control sobre el textarea nativo. A diferencia del elemento nativo de área de texto, el área de texto iónica no admite la carga de su valor desde el contenido interno. El valor del área de texto debe establecerse en el atributo de valor. El componente textarea acepta los atributos nativos textarea además de las propiedades IONIC.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
}
