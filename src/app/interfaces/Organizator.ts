import { Turnir } from "./Turnir"

export interface Organizator
{

        id: number
        ime: string
        prezime: string
        email: string
        password: string
        turnir: Turnir[]

 }
