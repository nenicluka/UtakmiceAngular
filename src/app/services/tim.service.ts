import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Tim } from '../interfaces/Tim';
import { CreateTeam } from '../interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimService {

  errors$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])
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

  addTim(timProps: CreateTeam) {
    try {
        const route = environment.api + "/tim/create"
        return this.http.post<Tim>(route, timProps)
    }
    catch (err: any) {
        throw new Error(err)
    }

}

obrisi(timId:number)
{
  try
  {
    console.log("http://localhost:3000/Tim/delete/"+`${timId}`)
    this.http.delete("http://localhost:3000/Tim/delete/"+`${timId}`) .pipe(
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