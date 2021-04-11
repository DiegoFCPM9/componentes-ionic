import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage{
  constructor(){}

  fechaNacimiento:Date=new Date();

  customPickerOptions={
    buttons:[
      {
        text: 'Cancelar',
        handler:(event)=>{
          console.log(event);
        }
      },{
        text: 'Listo',
        handler:(event)=>{
          console.log(event);
        }
      }
    ]
  }

  changeDate(event){
    console.log(event);
    console.log(new Date(event.detail.value));
  }
}
