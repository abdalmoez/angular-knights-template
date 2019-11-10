import { Component, OnInit } from '@angular/core';
import { ContactMessage } from 'src/app/Models/ContactMessage';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
declare function mainCall():any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactMessage:ContactMessage;
  contactForm: FormGroup;
  id: number;
  constructor(
    private contactService: ContactService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.contactMessage = new ContactMessage(0,'','','','');
    // this.contactForm = this.formBuilder.group({
    //     contactName: [''],
    //     contactEmail: [''],
    //     message: [''],
    //     subject: ['']

    //   });
  }

  ngAfterViewInit(){
    mainCall(); 
  }

  saveContact(contact: any) {
    this.contactService.addContact(this.contactMessage);
    console.log(this.contactService.getContacts());
    //console.log("contact", this.contactMessage);
  }

}
