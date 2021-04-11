import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage{
  constructor(){}

  colors=[
    {
      name: 'Primary',
      color: 'primary',
      selected: false
    },{
      name: 'Secondary',
      color: 'secondary',
      selected: true
    },{
      name: 'Tertiary',
      color: 'tertiary',
      selected: false
    },{
      name: 'Danger',
      color: 'danger',
      selected: true
    },{
      name: 'Succes',
      color: 'succes',
      selected: false
    }
  ]

  clickCheckbox(check:any){
    console.log(check);
  }

  clickData(){
    console.log(this.colors);
  }
}
