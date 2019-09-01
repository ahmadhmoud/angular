import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiBaseUrl: string = 'https://us-central1-angular-ffdc8.cloudfunctions.net/';

  constructor(private http: HttpClient) { }

  listResource(resourceName: string): Observable<any> {
    const observable = this.http.get<any>(`${this.apiBaseUrl}${resourceName}`).pipe(share());
    observable
      .subscribe((response) => {
        console.log(response);
      }, (error) => {
        console.error(error);
      }, () => {
        console.info("complete");
      });
    return observable;
  }

  createResource(resourceName: string, data: any): Observable<any> {
    const observable = this.http.post<any>(`${this.apiBaseUrl}${resourceName}`, data).pipe(share());
    observable
      .subscribe((response) => {
        console.log(response);
      }, (error) => {
        console.error(error);
      }, () => {
        console.info("complete");
      });
    return observable;
  }
}
