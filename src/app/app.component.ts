import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { pages } from './components/interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  pages:Observable<pages[]>;

  constructor(private dataService:DataService, 
    private menuController:MenuController,/* , private navController:NavController */
    private platform:Platform){
    this.initializeApp();
  }
  ngOnInit(){
    this.pages=this.dataService.getMenuOpts();
  }
  initializeApp(){
    this.platform.ready().then(()=>{
      this.CheckDarkTheme();
    });
  }

  CheckDarkTheme(){
    const prefersDark=window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefersDark);
    if(prefersDark.matches){
      document.body.classList.toggle('dark');
    }
  }
}
