import { Role } from "./Role"

export interface UserData {
    id: number
    ime: string
    prezime: string
    email: string
    role: Role
    password: string
}