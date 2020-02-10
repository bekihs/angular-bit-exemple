import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import Contact from '../models/Contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[]
  constructor(private contactService:ContactService) { }

  ngOnInit() {
    this.contactService.loadContacts()
    this.contactService.contacts.subscribe(contacts=>this.contacts = contacts)
  }

}
