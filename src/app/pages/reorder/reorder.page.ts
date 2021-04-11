import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage{
  constructor(){}

  reorderState:Boolean=true;
  reorder(){
    this.reorderState=!this.reorderState;
  }

  personajes:string[]=[
    'Aquaman',
    'Superman',
    'Batman',
    'Mujer Maravilla',
    'Flash'
  ]

  doReorder(event:any){
    console.log(event);

    const moverItem=this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, moverItem);
    console.log(this.personajes);

    event.detail.complete();
  }
}
