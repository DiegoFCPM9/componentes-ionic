import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit{
  constructor(private dataService:DataService){}

  superHeroes:Observable<any>;
  textSearch:string='';
  ngOnInit(){
    this.superHeroes=this.dataService.getHeroes();
  }

  segmentChanged(event){
    this.textSearch=event.detail.value;
    console.log(this.textSearch);
    if(this.textSearch!='Segments'){
      for(var K:number=1; K<=document.getElementsByTagName('br').length; K++){
        if(K<=6){
          var id:string='segment-'+K.toString();
          document.getElementById(id).style.display='none';
        }
        document.getElementsByTagName('br')[K].style.display='none';
      }
    }else{
      for(var K:number=1; K<=document.getElementsByTagName('br').length; K++){
        if(K<=6){
          var id:string='segment-'+K.toString();
          document.getElementById(id).style.display='contents';
        }
        document.getElementsByTagName('br')[K].style.display='contents';
      }
    }
  }
}
