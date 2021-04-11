import { Component, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent{
  @Input() title:string;

  constructor(private menuController:MenuController){}

  verMenu(){
    this.menuController.enable(true, 'mainMenu');
    this.menuController.open('mainMenu');
  }
}
