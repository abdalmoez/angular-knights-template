import { Injectable } from '@angular/core';
import { ContactMessage } from '../Models/ContactMessage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  private contactUrl = 'api/contacts';

  // Log function for Console
  private log(log: string) {
    console.info(log);
  }

  // Handle Error
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }

  //Return all contacts
  getContacts(): Observable<ContactMessage[]> {
    return this.http.get<ContactMessage[]>(this.contactUrl).pipe(
      tap(_ => this.log('fetched contact')),
      catchError(this.handleError('get Contacts', []))
    );

  }
  
  // Delete Contact
  deleteContact(contact: ContactMessage): Observable<ContactMessage> {
    const url = `${this.contactUrl}/${contact.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.delete<ContactMessage>(url, httpOptions).pipe(
      tap(_ => this.log(`delete contact id= ${contact.id}`)),
      catchError((this.handleError<any>('Delete contact')))
    );
  }

  // Add Contact
  addContact(contact: ContactMessage): Observable<ContactMessage> {
    const url = `${this.contactUrl}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    console.log(url);console.log(httpOptions);
    return this.http.post<ContactMessage>(url, contact, httpOptions).pipe(
      tap(_ => this.log(`ajouter contact id= ${contact.name}`)),
      catchError((this.handleError<any>('ajouter contact')))
    );
  }

  // Display Contact by Id
  displayContact(id: number): Observable<ContactMessage> {
    const url = `${this.contactUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.get<ContactMessage>(url, httpOptions).pipe(
      tap(_ => this.log(`display contact id= ${id}`)),
      catchError((this.handleError<any>('display contact')))
    );
  }
  IsValidForm(contactMessage:ContactMessage):boolean {
    return true;
  }

  SaveContact(contactMessage:ContactMessage):boolean {
    console.log(contactMessage);
    return true;
  }
}
