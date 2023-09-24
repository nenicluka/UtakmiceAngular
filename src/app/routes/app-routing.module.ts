import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../entry-page/home/home.component';
import { NavigationComponent } from '../entry-page/navigation/navigation.component';
import { Signin } from '../entry-page/signin/signin.component';
import { Signup } from '../entry-page/signup/signup.component';
import { IgracInterfaceComponent } from '../igrac-interface/igrac-interface.component';
import { TurnirComponent } from '../igrac-interface/turnir/turnir.component';
import { ProfileComponent } from '../igrac-interface/profile/profile.component';
import { TimComponent } from '../igrac-interface/tim/tim.component';
import { TimDetailComponent } from '../igrac-interface/tim-detail/tim-detail.component';
import { TurnirDetailComponent } from '../igrac-interface/turnir-detail/turnir-detail.component';
// import { ReaderInterfaceComponent } from '../reader-interface/reader-interface.component';
// import { BooksComponent } from '../reader-interface/books/books.component';
// import { ProfileComponent } from '../reader-interface/profile/profile.component';
// import { AuthorsComponent } from '../reader-interface/authors/authors.component';
// import { GenresComponent } from '../reader-interface/genres/genres.component';
// import { AuthorDetailComponent } from '../reader-interface/author-detail/author-detail.component';
// import { GenreDetailComponent } from '../reader-interface/genre-detail/genre-detail.component';
// import { BookDetailComponent } from '../reader-interface/book-detail/book-detail.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "signin", component: Signin },
    { path: "signup", component: Signup },


    {
        path: "r", component: IgracInterfaceComponent, children: [
            { path: "tim", component: TimComponent },
            { path: "tim/:id", component: TimDetailComponent },
            { path: "turnir", component: TurnirComponent },
            { path: "turnir/:id", component: TurnirDetailComponent },
            //{ path: "genres", component: GenresComponent },
           // { path: "genres/:id", component: GenreDetailComponent },
            { path: "profile", component: ProfileComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}