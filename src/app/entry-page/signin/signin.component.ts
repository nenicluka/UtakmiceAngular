import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { Role, UserSignin } from 'src/app/interfaces';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { selectUserSigninCredentials } from 'src/app/store/selectors/signin.selectors';
import { setEmail, setPassword, setUserRole } from 'src/app/store/actions/signin.actions';
import { MatListModule } from '@angular/material/list';
import { SpinnerComponent } from "../../shared-components/spinner/spinner.component";


@Component({
    selector: 'entry-page-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css'],
    standalone: true,
    imports: [MatInputModule, MatDividerModule, MatFormFieldModule, FormsModule, MatButtonModule, CommonModule, MatRadioModule, MatListModule, SpinnerComponent]
})
export class Signin implements OnInit {
  userCredentials: UserSignin = { email: "", password: "", role: Role.Igrac }
  errors$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])
  errors: string[] = []
  waitingForSigninResponse: boolean = false

  constructor(
    private store: Store<{ userSigninCredentials: UserSignin }>,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.store.select(selectUserSigninCredentials).subscribe({
      next: (credentials) => {
        this.userCredentials = credentials
      }
    })

    this.errors$.subscribe({
      next: (errors) => {
        this.errors = errors
      }
    })
  }

  setEmail(email: string) {
    this.store.dispatch(setEmail({ email }))
    this.errors$.next([])
  }

  setPassword(password: string) {
    this.store.dispatch(setPassword({ password }))
    this.errors$.next([])
  }

  setRole(role: string) {
    const userRole: Role = role === "reader" ? Role.Igrac : (role === "moderator" ? Role.Moderator : Role.Organizator);
    this.store.dispatch(setUserRole({ role: userRole }))
    this.errors$.next([])
  }

  async signin() {
    this.waitingForSigninResponse = true
    await this.authService.login(this.userCredentials, this.errors$)
    this.waitingForSigninResponse = false
  }
}