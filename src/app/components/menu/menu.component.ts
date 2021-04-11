import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { pages } from '../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit{
  pages:Observable<pages[]>;

  constructor(private dataService:DataService, private menuController:MenuController/* , private navController:NavController */){}
  ngOnInit(){
    this.pages=this.dataService.getMenuOpts();
  }

  /* onClick(){
    this.navController.pop();
  } */
}
