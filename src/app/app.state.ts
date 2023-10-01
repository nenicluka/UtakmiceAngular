import { UpdatePasssword, UserSignin, UserSignup } from "./interfaces";
//import { BooksState } from "./store/reducers/book.reducers";

export default interface AppState {
    //books: BooksState,
    userSigninCredentials: UserSignin,
    userSignupCredentials: UserSignup,
    updatePasswordData: UpdatePasssword
}