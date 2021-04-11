import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.page.html',
  styleUrls: ['./virtual-scroll.page.scss'],
})
export class VirtualScrollPage{
  items:any[]=[];
  constructor(private alertController:AlertController){
    for(let i=0; i<1000; i++){
      this.items.push({
        name: i+' - '+images[rotateImg],
        imgSrc: getImgSrc(),
        avatarSrc: getImgSrc(),
        imgHeight: Math.floor(Math.random()*50+150),
        content: lorem.substring(0, Math.random()*(lorem.length-100)+100)
      });

      rotateImg++;
      if(rotateImg===images.length){
        rotateImg=0;
      }
    }
  }

  clickInfo(){
    this.presentInfo();
  }
  async presentInfo(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente Virtual-Scroll',
      subHeader: 'Traducido por Google.',
      message: 'Virtual-Scroll muestra una lista virtual "infinita". Se pasa una matriz de registros al desplazamiento virtual que contiene los datos para los que se crearán plantillas. La plantilla creada para cada registro, denominada celda, puede constar de elementos, encabezados y pies de página. Por motivos de rendimiento, no todos los registros de la lista se procesan a la vez; en su lugar, un pequeño subconjunto de registros (suficiente para llenar la ventana gráfica) se renderiza y reutiliza a medida que el usuario se desplaza.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
}

const lorem='Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let rotateImg=0;

const images=[
  'bandit',
  'batmobile',
  'blues-brothers',
  'bueller',
  'delorean',
  'eleanor',
  'general-lee',
  'ghostbusters',
  'knight-rider',
  'mirth-mobile'
];

function getImgSrc(){
  const src:string='https://dummyimage.com/600x400/${'+Math.round(Math.random()*99999)+'}/fff.png';
  rotateImg++;
  if(rotateImg===images.length){
    rotateImg=0;
  }
  return src;
}
