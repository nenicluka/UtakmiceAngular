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
import { IgracComponent } from '../igrac-interface/igrac/igrac.component';
import { RolesGuard } from 'src/guards/roles.guard';
import { AuthGuard } from 'src/guards';
import { OrganizatorComponent } from '../organizator/organizator.component';
import { ProfileOrganizatorComponent } from '../organizator/profile-organizator/profile-organizator.component';
import { TurnirOrganizatorComponent } from '../organizator/turnir-organizator/turnir-organizator.component';
import { OgranizatorDetailTurnirComponent } from '../organizator/ogranizator-detail-turnir/ogranizator-detail-turnir.component';
import { ModeratorInterfaceComponent } from '../moderator-interface/moderator-interface.component';
import { ProfileModeratorComponent } from '../moderator-interface/profile-moderator/profile-moderator.component';
import { TurnirModeratorComponent } from '../moderator-interface/turnir-moderator/turnir-moderator.component';
import { TimModeratorComponent } from '../moderator-interface/tim-moderator/tim-moderator.component';
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
        path: "i", component: IgracInterfaceComponent, 
        canActivate: [AuthGuard, RolesGuard],
        children: [
            { path: "tim", component: TimComponent },
            { path: "tim/:id", component: TimDetailComponent },
            { path: "turnir", component: TurnirComponent },
            { path: "turnir/:id", component: TurnirDetailComponent },
            { path: "igrac", component: IgracComponent},
           // { path: "genres/:id", component: GenreDetailComponent },
            { path: "profile", component: ProfileComponent },
        ]
    },
    {
        path: "o", component: OrganizatorComponent,
        //canActivate: [AuthGuard, RolesGuard],
        children: [
            { path: "profile", component: ProfileOrganizatorComponent },
            { path: "turnir", component: TurnirOrganizatorComponent },
            { path: "turnir/:id", component: OgranizatorDetailTurnirComponent },
            


        ]
    },
    {
        path: "m", component: ModeratorInterfaceComponent,
        //canActivate: [AuthGuard, RolesGuard],
        children: [
            { path: "profile", component: ProfileModeratorComponent },
            { path: "turnir", component: TurnirModeratorComponent },
            { path: "tim", component: TimModeratorComponent },

           // { path: "turnir/:id", component: OgranizatorDetailTurnirComponent },
            


        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}