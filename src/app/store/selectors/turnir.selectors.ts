import { CreateTurnir } from "src/app/interfaces/CreateTurnir";

export const selectAddTurnirData = (state: { addTurnirData: CreateTurnir }) => state.addTurnirData

export const selectUpdateTurnirData = (state: { updateTurnirData: CreateTurnir }) => state.updateTurnirData