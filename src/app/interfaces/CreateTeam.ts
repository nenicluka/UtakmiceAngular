import { Role } from "./Role"

export interface CreateTeam {

    naziv: string
    mesto: string
    brojIgraca: number
    igraciIds: number[]
    naziviTurnira: string[]  
}