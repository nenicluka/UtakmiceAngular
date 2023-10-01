import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Signin } from '../signin/signin.component';
import { Signup } from '../signup/signup.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'entry-page-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  standalone: true,
  imports: [MatTabsModule, Signin, Signup, HomeComponent, RouterModule,MatToolbarModule, MatButtonModule,]
})
export class NavigationComponent {

}