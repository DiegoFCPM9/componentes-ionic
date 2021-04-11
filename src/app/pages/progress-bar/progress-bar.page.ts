import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage{
  percent:number=0.0;
  value:number=0;

  constructor(){}

  rangeChange(event){
    this.percent=event.detail.value*0.01;
    this.value=event.detail.value;
  }
}
