import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit{
  constructor(public alertController:AlertController){}

  ngOnInit(){
  }

  clickAlert(alert){
    switch(alert){
      case 1:
        this.presentAlert();
        break;
      case 2:
        this.presentAlertMultipleButtons();
        break;
      case 3:
        this.presentAlertConfirm();
        break;
      case 4:
        this.presentAlertPrompt();
        break;
      case 5:
        this.presentAlertRadio();
        break;
      case 6:
        this.presentAlertCheckbox();
        break;
      default:
        break;
    }
  }

  async presentAlert(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: '¿Seguro?',
      message: 'Mensaje',
      buttons:[{
        text: 'De acuerdo',
        handler:()=>{
          //Función que se dispara cuando dan click.
        }
      }]
    });

    await alert.present();
  }

  async presentAlertMultipleButtons(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: '¿Seguro?',
      message: 'Mensage.',
      buttons:[{
        text: 'De acuerdo',
        handler:()=>{
          //Función que se dispara cuando dan click.
        }
      },{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'red',
        handler:()=>{
          //Función que se dispara cuando dan click.
        }
      }]
    });

    await alert.present();
  }

  async presentAlertConfirm(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Confirma',
      message: '¡Mensage <strong>importante</strong>!',
      buttons:[{
          text: 'Salir',
          role: 'cancel',
          cssClass: 'secondary',
          handler:(blah)=>{
            console.log('No confirmación.');
          }
        },{
          text: 'Confirmar',
          handler:()=>{
            console.log('Confimación.');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Formulario',
      inputs:[{
          name: 'Input-1',
          type: 'text',
          placeholder: 'InputText'
        },{
          name: 'Input-2',
          type: 'text',
          id: 'Input-2-id',
          value: 'Valor',
          placeholder: 'InputText'
        },
        //Input multilinea.
        {
          name: 'Párrafo',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'InputTextParagraph'
        },{
          name: 'Párrafo',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        //Input date con min & max.
        {
          name: 'FechaConLímites',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        //Input date sin min o max.
        {
          name: 'FechaSinLímites',
          type: 'date'
        },
        //Input number.
        {
          name: 'NúmeroConLímites',
          type: 'number',
          min: -5,
          max: 10
        },{
          name: 'NúmeroSinLímites',
          type: 'number'
        },
        //Password
        {
          name: 'Contraseña',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes:{
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons:[{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler:()=>{
            console.log('Cancelado');
          }
        },{
          text: 'Listo',
          handler:()=>{
            console.log('Listo');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRadio(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs:[
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },{
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },{
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },{
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },{
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },{
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6',
          value: 'value6'
        }
      ],
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler:()=>{
            console.log('Confirm Cancel');
          }
        },{
          text: 'Ok',
          handler:()=>{
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertCheckbox(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Checkbox',
      inputs:[
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },{
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2'
        },{
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3'
        },{
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4'
        },{
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5'
        },{
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6'
        }
      ],
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler:()=>{
            console.log('Confirm Cancel');
          }
        },{
          text: 'Ok',
          handler:()=>{
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}