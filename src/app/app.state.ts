import { CreateTeam, PrijaviTim, UpdatePasssword, UserSignin, UserSignup, CreateTurnir } from "./interfaces";
import { TimState } from "./store/reducers/tim.reducers";
import { TurnirState } from "./store/reducers/turnir.reducers";

//import { BooksState } from "./store/reducers/book.reducers";

export default interface AppState {
    //books: BooksState,
    userSigninCredentials: UserSignin,
    userSignupCredentials: UserSignup,
    updatePasswordData: UpdatePasssword,
    tim: TimState,
    addTimData: CreateTeam,
    turnir: TurnirState,
    addTurnirData: CreateTurnir,





}