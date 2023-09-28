import { createReducer, on } from "@ngrx/store";
import { Role, UserSignin } from "src/app/interfaces";
import * as LoginActions from '../actions/signin.actions'

export const userSigninCredentials: UserSignin = {
    email: "",
    password: "",
    role: Role.Igrac
}

export const signinReducer = createReducer(
    userSigninCredentials,
    on(LoginActions.setEmail, (credentails, { email }) => ({ ...credentails, email })),
    on(LoginActions.setPassword, (credentials, { password }) => ({ ...credentials, password })),
    on(LoginActions.setUserRole, (credentials, { role }) => ({ ...credentials, role }))
)