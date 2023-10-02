import { Injectable } from '@angular/core';
import { CreateTeam, Role, Tokens, UserSignin, UserSignup } from '../interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, EMPTY, Observable, catchError, lastValueFrom } from 'rxjs';
import { User } from '../interfaces/User';
import { UpdatePasssword } from '../interfaces/UpdatePassword';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) { }

  async login(userCredentials: UserSignin | UserSignup, errors$: BehaviorSubject<string[]>): Promise<Tokens | undefined> {
    try {
      const { role, ...credentials } = userCredentials
      const userType: string = role === Role.Igrac ? "igrac" : (role === Role.Moderator ? "moderator" : "organizator");
      const signinOrSignupMethod: string = "ime" in userCredentials ? "/signup" : "/signin"
      const route: string = environment.api + `/${userType}` + signinOrSignupMethod
      // zato sto se za signup salje i role
      const body = "ime" in userCredentials ? userCredentials : credentials

      const tokens$: Observable<Tokens> = this.http.post<Tokens>(route, body)
        .pipe(
          catchError((error) => {
            // verovatno ima neka fora da se ovo bolje ishendla
            if (typeof error.error.message !== "object") {
              errors$.next([error.error.message])
            }
            else {
              errors$.next(error.error.message)
            }

            throw new Error(error)
          })
        )
        const tokens = await lastValueFrom(tokens$)
        const user: User = {
          email:userCredentials.email,
          role,
          accessToken: tokens.access_token
        }
        localStorage.setItem("userData", JSON.stringify(user))
        this.user$.next(user)

        const nextPageRoute: string = role === Role.Igrac ? "i/profile" : (role === Role.Moderator ? "m/profile" : "o/profile");
        this.router.navigate([nextPageRoute])


        this.user$.next(user)
  
        return tokens
    }
    catch (err) {
      console.log(err)
    }
    return undefined
  }

  logout(): void {
    this.user$.next(null)
    localStorage.removeItem("access_token")
    this.router.navigate(["/"])
  }

  updatePassword(updatePasswordData: UpdatePasssword, errors$: BehaviorSubject<string[]>) {
    try {
      const userType: string = this.user$.value!.role === Role.Igrac ? "Igrac" : (this.user$.value!.role === Role.Moderator ? "Moderator" : "Organizator");
      console.log(userType)
      const route: string = environment.api + `/${userType}` + "/updatePassword"

      this.http.put(route, updatePasswordData)
        .pipe(
          catchError((error) => {
            // verovatno ima neka fora da se ovo bolje ishendla
            errors$.next(["Wrong password provided"])

            throw new Error(error)
          })
        ).subscribe({
          next: () => {
            errors$.next(["Password changed successfully"])
          }
        })
    }
    catch (err) {
      console.log(err)
    }
  }


async createTeam(telo:CreateTeam,errors$: BehaviorSubject<string[]>)
  {
    try{
      errors$.next(["Uspesno dodat igrac!"])

  
      const url="http://localhost:3000/Tim/create"
  
      const body:CreateTeam={
        "naziv":telo.naziv,
        "mesto":telo.mesto,
        "brojIgraca": telo.brojIgraca,
        "igraciIds":telo.igraciIds,
        "naziviTurnira":telo.naziviTurnira
    }
    
      
      this.http.post<CreateTeam>(url,body)
      .pipe(
        catchError((error) => {
          if (typeof error.error.message !== "object") {
            errors$.next([error.error.message])
          }
          else {
            errors$.next(error.error.message)
          }
  
          throw new Error(error)
        })
      )

    } 


    catch(error:any)
    {
      console.log(error)
    }


    
}


}


