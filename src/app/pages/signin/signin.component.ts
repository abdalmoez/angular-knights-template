import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
declare function mainCall():any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user:User;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    mainCall(); 
  }
}
