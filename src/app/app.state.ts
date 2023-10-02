import { CreateTeam, UpdatePasssword, UserSignin, UserSignup } from "./interfaces";
import { TimState } from "./store/reducers/tim.reducers";
//import { BooksState } from "./store/reducers/book.reducers";

export default interface AppState {
    //books: BooksState,
    userSigninCredentials: UserSignin,
    userSignupCredentials: UserSignup,
    updatePasswordData: UpdatePasssword,
    tim: TimState,
    addTimData: CreateTeam


}