import { Role } from "./Role"

export interface UserSignup {
    ime: string,
    prezime: string,
    role: Role,
    email: string
    password: string
}