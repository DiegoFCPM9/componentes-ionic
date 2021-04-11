import { Component } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { PopoverInfoComponent } from './popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage{
  constructor(private popoverController:PopoverController, private alertController:AlertController){}

  async presentPopover(ev:any){
    const popover=await this.popoverController.create({
      component:PopoverInfoComponent,
      event:ev,
      translucent:true,
      backdropDismiss:false
    });
    await popover.present();

    //onDidDismiss
    const {data}=await popover.onWillDismiss();
    console.log({data});
    
  }

  clickInfo(){
    this.presentInfo();
  }
  async presentInfo(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente popover',
      subHeader: 'Traducido por Google.',
      message: 'Un popover es un diálogo que aparece en la parte superior de la página actual. Se puede usar para cualquier cosa, pero generalmente se usa para acciones de desbordamiento que no caben en la barra de navegación.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
}