
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class DataService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getData(query : string): Observable<any> {
    const params = new HttpParams().set('searchinput', query); 
    
    const route = this.http.get<any>(`${this.apiUrl}/test`, { params });
    return route
  }
}