import { Component, OnInit } from '@angular/core';
import { SubscribeService } from 'src/app/services/subscribe.service';
import { Subscribe } from 'src/app/Models/Subscribe';
declare function mainCall():any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  subscribers:Subscribe[];
  constructor(private subscribeService:SubscribeService) { }

  ngOnInit() {
    this.getSubscibers();
  }

  ngAfterViewInit(){
    mainCall(); 
  }


  getSubscibers() {
    this.subscribeService.getSubscribers().subscribe(
      res => {
         this.subscribers = res;
         console.log("subscribers" , this.subscribers)   });
  }
}
