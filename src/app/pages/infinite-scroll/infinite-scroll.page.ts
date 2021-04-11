import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage{
  constructor(){}

  @ViewChild(IonInfiniteScroll) infiniteScroll:IonInfiniteScroll;

  data:any[]=Array(19);

  loadData(/*event*/){
    //console.log(event);

    setTimeout(()=>{
      if(this.data.length>101){
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled=true;
        return;
      }else{
        const nuevoArreglo=Array(19);
        this.data.push(...nuevoArreglo);
      }

      //event.target.complete();
      this.infiniteScroll.complete();
    }, 1001);
  }
}
