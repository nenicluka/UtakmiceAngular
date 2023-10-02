import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OrganizatorComponent } from './organizator/organizator.component';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { NavigationComponent } from './entry-page/navigation/navigation.component';
import { Signin } from './entry-page/signin/signin.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { IgracInterfaceComponent } from './igrac-interface/igrac-interface.component';
import { NavbarComponent } from './igrac-interface/navbar/navbar.component';
import { ProfileComponent } from './igrac-interface/profile/profile.component';
import { HomeComponent } from './entry-page/home/home.component';
import { RouterModule } from '@angular/router';
import { PaginatorComponent } from './shared-components/paginator/paginator.component';
import { SpinnerComponent } from './shared-components/spinner/spinner.component';
import { TurnirComponent } from './igrac-interface/turnir/turnir.component';
import { TimComponent } from './igrac-interface/tim/tim.component';
import { TurnirDetailComponent } from './igrac-interface/turnir-detail/turnir-detail.component';
import { TimDetailComponent } from './igrac-interface/tim-detail/tim-detail.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { IgracComponent } from './igrac-interface/igrac/igrac.component';
import { signinReducer } from './store/reducers/signin.reducers';
import { signupReducer } from './store/reducers/signup.reducers';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { CreateTeamComponent } from './igrac-interface/create-team/create-team.component';
import { NavbarOrganizatorComponent } from './organizator/navbar-organizator/navbar-organizator.component';
import { ProfileOrganizatorComponent } from './organizator/profile-organizator/profile-organizator.component';
import { TurnirOrganizatorComponent } from './organizator/turnir-organizator/turnir-organizator.component';
import { OrganizatorTimComponent } from './organizator/organizator-tim/organizator-tim.component';
import { OgranizatorDetailTurnirComponent } from './organizator/ogranizator-detail-turnir/ogranizator-detail-turnir.component';
import { ChangePasswordDialogComponent } from './shared-components/change-password-dialog/change-password-dialog.component';
import { userChangePasswordReducer } from './store/reducers/user.reducers';
import { ModeratorInterfaceComponent } from './moderator-interface/moderator-interface.component';
import { NavbarModeratorComponent } from './moderator-interface/navbar-moderator/navbar-moderator.component';
import { ProfileModeratorComponent } from './moderator-interface/profile-moderator/profile-moderator.component';
import { TimModeratorComponent } from './moderator-interface/tim-moderator/tim-moderator.component';
import { TurnirModeratorComponent } from './moderator-interface/turnir-moderator/turnir-moderator.component';
import { DodavanjeTimaComponent } from './igrac-interface/dodavanje-tima/dodavanje-tima.component';
import { TimEffect } from './store/effects/tim.effect';
import { timDataReducer, timReducer } from './store/reducers/tim.reducers';
import { turnirDataReducer, turnirReducer } from './store/reducers/turnir.reducers';
import { DodavanjeTurniraOrgComponent } from './organizator/dodavanje-turnira-org/dodavanje-turnira-org.component';
import { ModeratorIgracComponent } from './moderator-interface/moderator-igrac/moderator-igrac.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    



      


    
  ],
  imports: [
    CreateTeamComponent,
    BrowserModule,
    FormsModule,
    EntryPageComponent,
    NavigationComponent,
    AppRoutingModule,
    IgracInterfaceComponent,
    HomeComponent,
    RouterModule,
    TurnirComponent,
    HttpClientModule,
    TimComponent,
    TurnirDetailComponent,
    TimDetailComponent,
    BrowserAnimationsModule,
    MatDialogModule,
    IgracComponent,
    PaginatorComponent,
    StoreModule.forRoot({
      userSigninCredentials: signinReducer,
      userSignupCredentials: signupReducer,
      updatePasswordData: userChangePasswordReducer,
      addTimData: timDataReducer,
      tim:timReducer,
      addTurnirData: turnirDataReducer,
      turnir:turnirReducer,






    }, {}),
    EffectsModule.forRoot([TimEffect]),
    NavbarOrganizatorComponent,
    ProfileOrganizatorComponent,
    TurnirOrganizatorComponent,
    OrganizatorTimComponent,
    OgranizatorDetailTurnirComponent,
    ModeratorInterfaceComponent,
    NavbarModeratorComponent,
    ProfileModeratorComponent,
    TurnirModeratorComponent,
    TimModeratorComponent,    
    DodavanjeTimaComponent,
    DodavanjeTurniraOrgComponent,
    ModeratorIgracComponent,



    
    
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
})
export class AppModule { }
