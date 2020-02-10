import { Injectable } from '@angular/core';
import {  Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs/observable/of'
import Contact from '../models/Contacts';
import CONTACTS from './contacts.js'


@Injectable()
export class ContactService {

  contacts = new BehaviorSubject<Array<Contact>>([])


  private _sort(arr: Contact[]): Contact[] {
    return arr.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    })
  }

  private _filter(contacts, term) {
    term = term.toLocaleLowerCase()
    return contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(term) ||
        contact.phone.toLocaleLowerCase().includes(term) ||
        contact.email.toLocaleLowerCase().includes(term)
    })
  }

  public loadContacts(filterBy = null): void {
    let contactsToReturn = this.contacts.value.length ? this.contacts.value: CONTACTS;
    if (filterBy && filterBy.term) {
      contactsToReturn = this._filter(filterBy.term, contactsToReturn)
    }
    this.contacts.next(this._sort(contactsToReturn))
  }


  public getContactById(id: string): Observable<Contact> {
    this.loadContacts();
    const contact = this.contacts.value.find(contact => contact._id === id)
    return contact ? of(contact) : Observable.throw(`Contact id ${id} not found!`)
  }

  public deleteContact(id: string) {
    const newContacts = this.contacts.value.filter(contact => contact._id !== id)
    this.contacts.next(newContacts)
  }

  public saveContact(contact: Contact) {
    return contact._id ? this._updateContact(contact) : this._addContact(contact)
  }

  private _updateContact(contact: Contact) {
    const newContacts = this.contacts.value.map(c => contact._id === c._id ? contact : c)
    this.contacts.next(newContacts)
  }

  private _addContact(contact: Contact) {
    const newContact = new Contact(contact.name, contact.email, contact.phone);
    newContact.setId();
    this.contacts.next([...this.contacts.value , newContact])
  }
}