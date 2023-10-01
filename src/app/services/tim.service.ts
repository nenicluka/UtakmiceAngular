import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Tim } from '../interfaces/Tim';

@Injectable({
  providedIn: 'root'
})
export class TimService {

  constructor(private http: HttpClient, private router: Router) { }

  getAllTims(): Observable<Tim[]> {
    return this.http.get<Tim[]>("http://localhost:3000/tim/getAll")
      .pipe();
  }

  getTimById(id: number): Observable<Tim> {
    return this.http.get<Tim>("http://localhost:3000/tim/get/" + `${id}`)
  }

  goToTim(timId: number) {
    this.router.navigate(["i/tim", timId]);
  }

  

  
}