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
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,


    
  ],
  imports: [
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



 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
