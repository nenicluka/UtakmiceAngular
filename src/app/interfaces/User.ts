import { Role } from "./Role"

export interface User {
    role: Role
    email: string
    accessToken: string
    // mozda ce mora i access token neki ovde
}