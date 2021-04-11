import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-text',
  templateUrl: './skeleton-text.page.html',
  styleUrls: ['./skeleton-text.page.scss'],
})
export class SkeletonTextPage implements OnInit{
  constructor(){}
  ngOnInit(){
  }

  toggleSkeleton(){
    const skeletonID=document.getElementById('skeleton'),
      skeletonStyle=window.getComputedStyle(skeletonID),
      skeletonDisplay=skeletonStyle.getPropertyValue('display');
    const dataEl=document.getElementById('data'),
      dataStyle=window.getComputedStyle(dataEl),
      dataDisplay=dataStyle.getPropertyValue('display');

    document.getElementById('skeleton').style.display=skeletonDisplay==='none' ? 'block' : 'none';
    document.getElementById('data').style.display=dataDisplay==='none' ? 'block' : 'none';
  }
}
