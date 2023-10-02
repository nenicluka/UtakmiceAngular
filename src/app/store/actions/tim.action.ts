import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { CreateTeam } from "src/app/interfaces/CreateTeam";
import { Tim } from "src/app/interfaces/Tim";

//akcije definisu sta treba uradis
//props su argumenti akciije

export const setTeamData = createAction(
    "[Tim] Set Tim Data",
    props<{ property: keyof CreateTeam, value: string | number |number[] }>()
)

export const createTeam = createAction(
    "[Tim] Add Review",
    props<{ timData: CreateTeam }>()
)

export const createTimSuccess = createAction(
    "[Tim] Add Tim Success",
    props<{ timData: Tim, isLoading: boolean }>()
)

export const createTimFail = createAction(
    "[Tim] Add Tim Fail"
)

export const updateTim = createAction(
    "[Tim] Update Tim"
)

export const updateTimSuccess = createAction(
    "[Tim] Update Tim Success",
    props<{ timData: Update<Tim>, isLoading: boolean }>()
)

export const updateTimFail = createAction(
    "[Tim] Update Tim Fail"
)