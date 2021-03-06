import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pages } from '../components/interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  constructor(private http:HttpClient){}

  getMenuOpts(){
    return this.http.get<pages[]>('/assets/data/menu-opts.json');
  }

  getUserList(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbumes(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes(){
    return this.http.get<any>('assets/data/superheroes.json').pipe(delay(3001));
  }
}
