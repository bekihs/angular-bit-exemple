import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import Contact from '../models/Contacts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[]
  constructor(private contactService: ContactService, private router: Router) {

  }

  onCreateContact() {
    this.router.navigate(['/contacts/new'])
  }
  ngOnInit() {
    this.contactService.loadContacts()
    this.contactService.contacts.subscribe(contacts => this.contacts = contacts)
  }

}
