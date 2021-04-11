import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { pickerController } from '@ionic/core/';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.page.html',
  styleUrls: ['./picker.page.scss'],
})
export class PickerPage{
  constructor(private alertController:AlertController){}

  defaultColumnOptions=[
    [
      'Diego',
      'Felipe',
      'Cortés',
      'Perdomo',
      'AKOD'
    ]
  ]

  multiColumnOptions=[
    [
      'Universidad',
      'Distrital',
      'Francisco',
      'José',
      'de',
      'Caldas'
    ],[
      'Universidad',
      'Distrital',
      'Francisco',
      'José',
      'de',
      'Caldas'
    ]
  ]

  async openPicker(numColumns=1, numOptions=5, columnOptions=this.defaultColumnOptions){
    const picker=await pickerController.create({
      columns: this.getColumns(numColumns, numOptions, columnOptions),
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel'
        },{
          text: 'Listo',
          handler:(event)=>{
            console.log(event.col_0.text);
          }
        }
      ]
    });

    await picker.present();
  }

  getColumns(numColumns, numOptions, columnOptions){
    let columns=[];
    for (let i=0; i<numColumns; i++) {
      columns.push({
        name: `col_${i}`,
        options: this.getColumnOptions(i, numOptions, columnOptions)
      });
     }

    return columns;
  }

  getColumnOptions(columnIndex, numOptions, columnOptions){
    let options=[];
    for (let i=0; i<numOptions; i++) {
      options.push({
        text: columnOptions[columnIndex][i % numOptions],
        value: i
      })
    }

     return options;
  }

  clickInfo(){
    this.presentInfo();
  }
  async presentInfo(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente Picker',
      subHeader: 'Traducido por Google.',
      message: 'Un picker es un cuadro de diálogo que muestra una fila de botones y columnas debajo. Aparece en la parte superior del contenido de la aplicación y en la parte inferior de la ventana gráfica.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
}
