import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }

  createDb(){

    let  subscribes =  [
      {  id: 1, email:  "1@live.fr",  date:  new Date(2019,10,1) },
      {  id: 2, email:  "2@live.fr",  date:  new Date(2019,10,2) },
      {  id: 3, email:  "3@live.fr",  date:  new Date(2019,10,3) }
    ];
 
    return {subscribes};
 
   }
}
