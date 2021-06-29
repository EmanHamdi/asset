import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
 getURL ='api/nutrition-data'
  getHeroes(): Observable<Element[]> {
    return this.http.get<Element[]>(this.getURL)
  }

}
