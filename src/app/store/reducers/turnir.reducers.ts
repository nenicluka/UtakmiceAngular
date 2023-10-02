import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { Turnir } from "src/app/interfaces";
import * as Actions from '../actions/turnir.action'
import { createReducer, on } from "@ngrx/store";
import { CreateTurnir } from "src/app/interfaces/CreateTurnir";

export interface TurnirState extends EntityState<Turnir> {
    timoviIDS: number[] | null
    organizatoriID: number[] | null
}

export const turnirData: CreateTurnir= {
    naziv: "",
    tip: "",
    opis: "",
    mesto: "",
    datum: new Date(),
    cenaUcesca: 0,
    nagradniFond: 0,
    brojTimova: 0,
    timoviIDS: [],
    organizatoriID:[]
}
export const adapter: EntityAdapter<Turnir> = createEntityAdapter<Turnir>()

export const initalState: TurnirState = adapter.getInitialState({
    timoviIDS: [],
    organizatoriID: [],
})

export const turnirDataReducer = createReducer(
    turnirData,
    on(Actions.setTurnirData, (turnirData, { property, value }) => {
        return { ...turnirData, [property]: value }
    })
)

export const turnirReducer = createReducer(
    initalState,
    on(Actions.createTurnir, (state) => {
        return { ...state, isLoading: true }
    }),
    on(Actions.createTurnirSuccess, (state, { turnirData }) => {
        return { ...adapter.addOne(turnirData, state), isLoading: false }
    }),
    on(Actions.updateTurnir, (state) => {
        return { ...state, isLoading: true }
    }),
    on(Actions.updateTurnirSuccess, (state, { turnirData }) => {
        return { ...adapter.updateOne(turnirData, state), isLoading: false }
    })
)