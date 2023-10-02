import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Igrac } from '../interfaces/Igrac'; 

@Injectable({
  providedIn: 'root'
})
export class IgracService {

  constructor(private http: HttpClient) { }

  getIgrac(): Observable<Igrac[]> {
    return this.http.get<Igrac[]>("http://localhost:3000/igrac/getAll")
      .pipe();
  }

  obrisiIgraca(igracId:number)
  {
    try
    {
      console.log("http://localhost:3000/Igrac/delete/"+`${igracId}`)
      this.http.delete("http://localhost:3000/Igrac/delete/"+`${igracId}`) .pipe(
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