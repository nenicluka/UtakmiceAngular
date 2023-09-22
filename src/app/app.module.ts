import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OrganizatorComponent } from './organizator/organizator.component';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { NavigationComponent } from './entry-page/navigation/navigation.component';
import { Signin } from './entry-page/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizatorComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EntryPageComponent,
    NavigationComponent,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
