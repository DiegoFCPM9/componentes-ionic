import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit{
  constructor(){}

  ngOnInit(){
  }

  fav:boolean=false;
  clickFavorite(){
    this.fav=!this.fav;
  }
}
