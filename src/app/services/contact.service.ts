import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  // private contactUrl = 'https://contacts-api-app.herokuapp.com/contacts';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  // ADD CONTACT
  // addContact(model: Contact): Observable<Contact> {
  //   // return this.http.post<Contact>(this.contactUrl, model, this.httpOptions);
  // }
  // Get contacts
  getContacts() {
    return this.firestore.collection('contacts').snapshotChanges();
  }

  createContact(contact: Contact) {
    return this.firestore.collection('contacts').add(contact);
  }

  updateContact(contact: Contact) {
    delete contact.id;
    this.firestore.doc('contacts' + contact.id).update(contact);
  }

  deleteContact(contactId: string) {
    this.firestore.doc('contacts/' + contactId).delete();
  }
}
