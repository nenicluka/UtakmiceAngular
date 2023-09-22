import { Organizator } from "./Organizator"
import { Tim } from "./Tim"


export interface Turnir
{
    id: number
    naziv: string
    tip: string
    opis: string
    mesto: string
    datum: Date
    cenaUcesca: number
    nagradniFond: number
    brojTimova: number
    organizator: Organizator[]
    tim: Tim[]
}
