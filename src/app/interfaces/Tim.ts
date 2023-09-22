import { Igrac } from "./Igrac"
import { Turnir } from "./Turnir"

export interface Tim
{
    id: number
    naziv: string
    mesto: string
    brojIgraca: number
    igrac: Igrac[]
    turnir: Turnir[]
}