import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { Tim } from "src/app/interfaces";
import * as Actions from '../actions/tim.action'
import { createReducer, on } from "@ngrx/store";
import { CreateTeam } from "src/app/interfaces/CreateTeam";

export interface TimState extends EntityState<Tim> {
    igraciIds: number[] | null
    naziviTurnira: number[] | null
}

export const timData: CreateTeam = {
    naziv:"",
    mesto:"",
    brojIgraca: 0,
    igraciIds:[],
    naziviTurnira:[]
}
export const adapter: EntityAdapter<Tim> = createEntityAdapter<Tim>()

export const initalState: TimState = adapter.getInitialState({
    igraciIds: [],
    naziviTurnira: [],
})

export const timDataReducer = createReducer(
    timData,
    on(Actions.setTeamData, (timData, { property, value }) => {
        return { ...timData, [property]: value }
    })
)

export const timReducer = createReducer(
    initalState,
    on(Actions.createTeam, (state) => {
        return { ...state, isLoading: true }
    }),
    on(Actions.createTimSuccess, (state, { timData }) => {
        return { ...adapter.addOne(timData, state), isLoading: false }
    }),
    on(Actions.updateTim, (state) => {
        return { ...state, isLoading: true }
    }),
    on(Actions.updateTimSuccess, (state, { timData }) => {
        return { ...adapter.updateOne(timData, state), isLoading: false }
    })
)