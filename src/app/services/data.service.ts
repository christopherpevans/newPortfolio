import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private contactUrl = 'https://contacts-api-app.herokuapp.com/contacts';

  private customerUrl = 'https://contacts-api-app.herokuapp.com/customers';
  public model: Contact[];
  public customer: Customer[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  constructor(private http: HttpClient) {}

  // GET CUSTOMER
  getContacts(): Observable<Contact[]> {
    return this.http
      .get<Contact[]>(this.contactUrl)
      .pipe(tap((data) => (this.model = data)));
  }

  // ADD CONTACT
  addContact(model: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl, model, this.httpOptions);
  }

  // GET CUSTOMER
  getCustomers(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(this.customerUrl)
      .pipe(tap((data) => (this.customer = data)));
  }

  // ADD CUSTOMER
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(
      this.customerUrl,
      customer,
      this.httpOptions
    );
  }
}
