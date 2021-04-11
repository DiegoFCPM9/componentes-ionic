import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchInfoPage } from './search-info/search-info.page';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit{
  constructor(private dataService:DataService, private modalController:ModalController){}

  albumes:any[]=[]
  textSearch:string='';
  ngOnInit(){
    this.dataService.getAlbumes().subscribe(albumes=>{
      this.albumes=albumes;
    });
  }
  onSearchChange(event){
    this.textSearch=event.detail.value;
  }

  async verModal(){
    const modal=await this.modalController.create({
      component:SearchInfoPage,
      componentProps:{
        nombre:'Diego',
        pais:'Colombia'
      }
    });
    await modal.present();

    //onDidDismiss
    const {data}=await modal.onWillDismiss();
    console.log({data});
  }
}
