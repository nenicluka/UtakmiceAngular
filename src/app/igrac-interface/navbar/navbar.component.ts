import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatIconModule } from '@angular/material/icon';
import {MatToolbarModule } from '@angular/material/toolbar';
import { ProfileComponent } from '../profile/profile.component';



@Component({
  selector: 'igrac-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, ProfileComponent],
})
export class NavbarComponent {

}
