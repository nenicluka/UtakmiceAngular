import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Igrac } from '../interfaces/Igrac'; 

@Injectable({
  providedIn: 'root'
})
export class IgracService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Igrac[]> {
    return this.http.get<Igrac[]>("http://localhost:3000/igrac/getAll")
      .pipe();
  }
}