import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
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
    this.router.navigate(["i/turnir", turnirId]);
  }

  goToTurnirOrg(turnirId: number) {
    this.router.navigate(["o/turnir", turnirId]);
  }

  dodaj(argumenti:DodajTimNaTurnirDto)
  {
    this.http.post<Turnir>("http://localhost:3000/Turnir/dodaj", argumenti)
  }

  obrisi(turnirId:number)
  {
    try
    {
      console.log("http://localhost:3000/Turnir/delete/"+`${turnirId}`)
      this.http.delete("http://localhost:3000/Turnir/delete/"+`${turnirId}`) .pipe(
        catchError((error) => {
          throw new Error(error)
        })
      ).subscribe({next:(value)=>console.log(value)})


    }
    catch(error:any)
    {
      return error
    }

  }
}