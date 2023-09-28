import { createReducer, on } from "@ngrx/store";
import { Role, UserSignup } from "src/app/interfaces";
import * as RegistrationActions from "../actions/signup.actions"

export const userSignupCredentials: UserSignup = {
    ime: "",
    prezime: "",
    role: Role.Igrac,
    email: "",
    password: ""
}

export const signupReducer = createReducer(
    userSignupCredentials,
    on(RegistrationActions.setUserSignupCredentials, (credentails, { property, value }) => ({ ...credentails, [property]: value }))
)