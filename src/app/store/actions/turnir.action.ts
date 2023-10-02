import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { CreateTurnir } from "src/app/interfaces/CreateTurnir";
import { Turnir } from "src/app/interfaces/Turnir";

//akcije definisu sta treba uradis
//props su argumenti akciije

export const setTurnirData = createAction(
    "[Turnir] Set Turnir Data",
    props<{ property: keyof CreateTurnir, value: string | number |number[] }>()
)

export const createTurnir = createAction(
    "[Turnir] Add Turnir",
    props<{ turnirData: CreateTurnir }>()
)

export const createTurnirSuccess = createAction(
    "[Turnir] Add Turnir Success",
    props<{ turnirData: Turnir, isLoading: boolean }>()
)

export const createTurnirFail = createAction(
    "[Turnir] Add Turnir Fail"
)

export const updateTurnir = createAction(
    "[Turnir] Update Turnir"
)

export const updateTurnirSuccess = createAction(
    "[Turnir] Update Turnir Success",
    props<{ turnirData: Update<Turnir>, isLoading: boolean }>()
)

export const updateTurnirFail = createAction(
    "[Turnir] Update Turnir Fail"
)