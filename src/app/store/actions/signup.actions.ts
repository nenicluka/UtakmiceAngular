import { createAction, props } from "@ngrx/store";
import { UserSignup } from "src/app/interfaces";

export const setUserSignupCredentials = createAction(
    "[Signup] Set User Credentials",
    props<{ property: keyof Omit<UserSignup, "role">, value: string }>()
)