import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage{
  constructor(){}

  user={
    email: '',
    password: ''
  }
  formSubmit(form:NgForm){
    console.log(form);

    console.log(this.user.email);
    console.log(this.user.password);
  }

  @ViewChild(IonInfiniteScroll) infiniteScroll:IonInfiniteScroll;
  formState:Boolean=true;
  loadData(){
    setTimeout(()=>{
      this.formState=false;

      this.infiniteScroll.complete();
      this.infiniteScroll.disabled=true;
    }, 1447);
  }
}
