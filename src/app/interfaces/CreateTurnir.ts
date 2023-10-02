export interface CreateTurnir {

    naziv: string
    tip: string
    opis: string
    mesto: string
    datum: Date
    cenaUcesca: number
    nagradniFond: number
    brojTimova: number
    timoviIDS: number[]
    organizatoriID:number[]
}