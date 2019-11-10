import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SubscribeService } from 'src/app/services/subscribe.service';
import { Subscribe } from 'src/app/Models/Subscribe';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  email:string="";
  subscribers: Subscribe[];
  emailForm:FormControl;

  constructor(private subscribeService:SubscribeService) { }

  ngOnInit() {
    this.getSubscibers();
    this.emailForm= new FormControl('',[
      Validators.required,
      Validators.email
    ]);
  }
  subscribe()
  {
    var s=new Subscribe(null,this.emailForm.value,new Date);
    
    console.log("here in subscribe");
    console.log('data', s);
    this.subscribeService.addSubscribe(s).subscribe(
      subscribe => this.subscribers.push(subscribe)
    );
    this.getSubscibers();
  }

  getSubscibers() {
    this.subscribeService.getSubscribers().subscribe(
      res => {
         this.subscribers = res;
         console.log("subscribers" , this.subscribers)   });
  }

  
  ngAfterViewInit(){
    console.log('Component::subscribe');
  }
}
