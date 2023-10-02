import { CreateTeam } from "src/app/interfaces/CreateTeam";

export const selectAddTimData = (state: { addTimData: CreateTeam }) => state.addTimData

export const selectUpdateTimData = (state: { updateTimData: CreateTeam }) => state.updateTimData