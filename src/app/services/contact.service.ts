import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contactUrl = 'https://contacts-api-app.herokuapp.com/contacts';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  constructor(private http: HttpClient) {}

  // ADD CONTACT
  addContact(model: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl, model, this.httpOptions);
  }
}
