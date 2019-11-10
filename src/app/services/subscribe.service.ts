import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Subscribe } from '../Models/Subscribe';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient) { }
  private subscribeUrl = 'api/subscribes';

  // Log function for Console
  private log(log: string) {
    console.info(log);
  }

  // Handle Error
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  //Return all contacts
  getSubscribers(): Observable<Subscribe[]> {
    return this.http.get<Subscribe[]>(this.subscribeUrl).pipe(
      tap(_ => this.log('fetched subscribe')),
      catchError(this.handleError('get Contacts', []))
    );

  }
  
  // Delete subscribe
  deleteSubscribe(subscribe: Subscribe): Observable<Subscribe> {
    const url = `${this.subscribeUrl}/${subscribe.email}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.delete<Subscribe>(url, httpOptions).pipe(
      tap(_ => this.log(`delete subscribe email= ${subscribe.email}`)),
      catchError((this.handleError<any>('Delete subscribe')))
    );
  }

  // Add subscribe
  addSubscribe(subscribe: Subscribe): Observable<Subscribe> {
    const url = `${this.subscribeUrl}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.post<Subscribe>(url, subscribe, httpOptions).pipe(
      tap(_ => this.log(`ajouter subscribe id= ${subscribe.id}`)),
      catchError((this.handleError<any>('ajouter subscribe')))
    );
  }

 
}
