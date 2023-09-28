import { Injectable } from '@angular/core';
import { Role, Tokens, UserSignin, UserSignup } from '../interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, catchError, lastValueFrom } from 'rxjs';
import { User } from '../interfaces/User';

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
        localStorage.setItem("access_token", tokens.access_token)
        const nextPageRoute: string = role === Role.Igrac ? "i/profile" : (role === Role.Moderator ? "i/tim" : "o/turnir");
        this.router.navigate([nextPageRoute])

        const user: User = {
          email: credentials.email,
          role,
          accessToken: tokens.access_token
        }
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

}