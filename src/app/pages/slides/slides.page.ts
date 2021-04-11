import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage{
  constructor(private alertController:AlertController, private navController:NavController){}

  slides:{ img:string, titulo:string, desc:string }[]=[
    {
      img: '/assets/slides/photos.svg',
      titulo: 'Comparte Fotos',
      desc: 'Mira y comparte increíbles fotos de todo el mundo'
    },{
      img: '/assets/slides/music-player-2.svg',
      titulo: 'Escucha Música',
      desc: 'Toda tu música favorita está aquí'
    },{
      img: '/assets/slides/calendar.svg',
      titulo: 'Nunca olvides nada',
      desc: 'El mejor calendario del mundo a tu disposición'
    },{
      img: '/assets/slides/placeholder-1.svg',
      titulo: 'Tu ubicación',
      desc: '¡Siempre sabremos donde estás!'
    }
  ];

  //Optional parameters to pass to the swiper instance.
  //See http://idangero.us/swiper/api/ for valid options.
  slideOpts={
    initialSlide: 0,
    speed: 500
  };

  onClick(){
    this.navController.navigateBack('/');
  }

  clickInfo(){
    this.presentInfo();
  }
  async presentInfo(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente slides',
      subHeader: 'Traducido por Google.',
      message: 'El componente slides es un contenedor de varias secciones. Cada sección se puede deslizar o arrastrar entre ellas. Contiene cualquier número de componentes slide.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
}