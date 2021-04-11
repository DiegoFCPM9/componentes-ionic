import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { pages } from 'src/app/components/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage{
  pages:Observable<pages[]>;

  constructor(private menu: MenuController, private dataService:DataService){}
  ngOnInit(){
    this.pages=this.dataService.getMenuOpts();
  }
  
  openFirst(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openCustom(){
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  openEnd(){
    this.menu.open('end');
  }
}