import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import Contact from '../models/Contacts';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact = new Contact('')
  constructor(private route: ActivatedRoute,
    private router: Router, private contactService: ContactService) { }

  onSave() {
    this.contactService.saveContact(this.contact);
    this.router.navigate(['/contacts'])
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id !== 'new')
        this.contactService.getContactById(id).subscribe((conatct) => {
          this.contact = conatct;
        });
    });

  }

}
