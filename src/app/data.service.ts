import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseURL = "https://reqres.in/api";

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return this.http.get(`${this.baseURL}/users`)
  }
}