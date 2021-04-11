import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pages } from '../../components/interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit{
  darkMode:boolean;
  pages:Observable<pages[]>;

  constructor(private dataService:DataService){
    const prefersDark=window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode=prefersDark.matches;
  }
  ngOnInit(){
    this.pages=this.dataService.getMenuOpts();
  }

  toggleDarkMode(){
    this.darkMode=!this.darkMode;
    document.body.classList.toggle('dark');
  }
}
