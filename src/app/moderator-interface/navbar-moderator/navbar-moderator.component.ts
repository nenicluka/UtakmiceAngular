import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatIconModule } from '@angular/material/icon';
import {MatToolbarModule } from '@angular/material/toolbar';
import { ProfileModeratorComponent } from '../profile-moderator/profile-moderator.component';


@Component({
  selector: 'app-navbar-moderator',
  templateUrl: './navbar-moderator.component.html',
  styleUrls: ['./navbar-moderator.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, ProfileModeratorComponent],
})
export class NavbarModeratorComponent {

}
