import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turnir } from '../interfaces/Turnir';
import { Router } from '@angular/router';
import { DodajTimNaTurnirDto } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TurnirService {

  constructor(private http: HttpClient, private router: Router) { }

  //OBSERVABLE je set bilo kojih vrednosti koji se menja tokom vremena
  getAllTurniri(): Observable<Turnir[]> {
    return this.http.get<Turnir[]>("http://localhost:3000/turnir/getAll")
      .pipe();
  }

  getTurnirById(id: number): Observable<Turnir> {
    return this.http.get<Turnir>("http://localhost:3000/turnir/get/" + `${id}`)
  }

  goToTurnir(turnirId: number) {
    this.router.navigate(["r/turnir", turnirId]);
  }

  dodaj(argumenti:DodajTimNaTurnirDto)
  {
    this.http.post<Turnir>("http://localhost:3000/Turnir/dodaj", argumenti)
  }
}