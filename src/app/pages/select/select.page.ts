import { Component, OnInit } from '@angular/core';

interface User{
  id:number;
  first:string;
  last:string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage{
  constructor(){}

  users:User[]=[
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },{
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },{
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }
  ];
}
