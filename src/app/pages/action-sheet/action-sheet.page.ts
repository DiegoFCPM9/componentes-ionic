import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage{
  constructor(private actionSheetController:ActionSheetController, 
    private alertController:AlertController){}

  clickActionSheet(){
    this.presentActionSheet();
  }
  async presentActionSheet(){
    const actionSheet=await this.actionSheetController.create({
      header: 'Albums',
      backdropDismiss: false,
      cssClass: 'as-red',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash-outline',
        cssClass: 'red',
        handler:()=>{
          console.log('Delete clicked');
        }
      },{
        text: 'Share',
        icon: 'share-outline',
        handler:()=>{
          console.log('Share clicked');
        }
      },{
        text: 'Play (open modal)',
        icon: 'caret-forward-circle-outline',
        handler:()=>{
          console.log('Play clicked');
        }
      },{
        text: 'Favorite',
        icon: 'heart-outline',
        handler:()=>{
          console.log('Favorite clicked');
        }
      },{
        text: 'Cancel',
        icon: 'close-outline',
        role: 'cancel',
        handler:()=>{
          console.log('Cancel clicked');
        }
      }]
    });
  await actionSheet.present();
  }

  clickInfo(){
    this.presentInfo();
  }
  async presentInfo(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente Action-Sheet',
      subHeader: 'Traducido por Google.',
      message: 'Un action-sheet es un cuadro de diálogo que muestra un conjunto de opciones. Aparece en la parte superior del contenido de la aplicación y el usuario debe descartarlo manualmente antes de que pueda reanudar la interacción con la aplicación. Las opciones destructivas se hacen obvias en el modo IOS. Hay varias formas de descartar la hoja de acciones, incluido tocar el fondo o presionar la tecla de escape en el escritorio.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }

  codes:string[]=[
    "clickActionSheet(){",
    "  this.presentActionSheet();",
    "}",
    "async presentActionSheet(){",
    "  const actionSheet=await this.actionSheetController.create({",
    "    header: 'Albums',",
    "    backdropDismiss: false,",
    "    cssClass: 'as-red',",
    "    buttons: [{",
    "      text: 'Delete',",
    "      role: 'destructive',",
    "      icon: 'trash-outline',",
    "      cssClass: 'red',",
    "      handler:()=>{",
    "        console.log('Delete clicked');",
    "      }",
    "    },{",
    "      text: 'Share',",
    "      icon: 'share-outline',",
    "      handler:()=>{",
    "        console.log('Share clicked');",
    "      }",
    "    },{",
    "      text: 'Play (open modal)',",
    "      icon: 'caret-forward-circle-outline',",
    "      handler:()=>{",
    "        console.log('Play clicked');",
    "      }",
    "    },{",
    "      text: 'Favorite',",
    "      icon: 'heart-outline',",
    "      handler:()=>{",
    "        console.log('Favorite clicked');",
    "      }",
    "    },{",
    "      text: 'Cancel',",
    "      icon: 'close-outline',",
    "      role: 'cancel',",
    "      handler:()=>{",
    "        console.log('Cancel clicked');",
    "      }",
    "    }]",
    "  });",
    "await actionSheet.present();",
    "}"
  ];
  code:string='';
}