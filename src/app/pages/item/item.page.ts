import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

interface statusChange{
  text:string;
}

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage{
  constructor(private alertController:AlertController){}

  buttonClickItem(){
    console.log('Click en el item button.');
  }

  slidingClickItem(){
    console.log('Click en el item sliding.');
  }

  clickInfo_1(){
    this.presentInfo_1();
  }
  async presentInfo_1(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente Item',
      subHeader: 'Traducido por Google.',
      message: 'Los items son elementos que pueden contener texto, iconos, avatares, imágenes, entradas y cualquier otro elemento nativo o personalizado. Generalmente se colocan en una lista con otros elementos. Los elementos se pueden deslizar, eliminar, reordenar, editar y más.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
  clickInfo_2(){
    this.presentInfo_2();
  }
  async presentInfo_2(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente Item-Divider',
      subHeader: 'Traducido por Google.',
      message: 'Los Item-Divider son elementos de bloque que se pueden utilizar para separar elementos en una lista. Son similares a los encabezados de lista, pero en lugar de colocarse en la parte superior de una lista, deben ir entre grupos de elementos.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
  clickInfo_3(){
    this.presentInfo_3();
  }
  async presentInfo_3(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente Item-Group',
      subHeader: 'Traducido por Google.',
      message: 'Los Item-Group son contenedores que organizan artículos similares juntos. Pueden contener divisores de elementos para dividir los elementos en varias secciones. También se pueden utilizar para agrupar elementos deslizantes.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }
  clickInfo_4(){
    this.presentInfo_4();
  }
  async presentInfo_4(){
    const alert=await this.alertController.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Componente Item-Sliding',
      subHeader: 'Traducido por Google.',
      message: 'Los Item-Sliding contienen un elemento que se puede arrastrar para revelar botones. Requiere un componente de elemento como hijo. Todas las opciones para revelar deben colocarse en el elemento de opciones del artículo.',
      buttons:[{
        text: 'De acuerdo'
      }]
    });

    await alert.present();
  }

  statusChange:string;

  @ViewChild(IonInfiniteScroll) infiniteScroll:IonInfiniteScroll;
  dividerState:Boolean=true;
  groupsState:Boolean=true;
  slidingState:Boolean=true;
  loadData(){
    if(this.dividerState){
      this.statusChange='Cargando Item-Divider...';
    }else if(this.groupsState){
      this.statusChange='Cargando Item-Group...';
    }else if(this.slidingState){
      this.statusChange='Cargando Item-Sliding...';
    }
    
    setTimeout(()=>{
      if(this.dividerState){
        this.dividerState=false;
      }else if(this.groupsState){
        this.groupsState=false;
      }else if(this.slidingState){
        this.slidingState=false;
        this.infiniteScroll.disabled=true;
      }
      
      this.infiniteScroll.complete();
    }, 1447);
  }
}
