import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatIconModule } from '@angular/material/icon';
import {MatToolbarModule } from '@angular/material/toolbar';
import { ProfileOrganizatorComponent } from '../profile-organizator/profile-organizator.component';


@Component({
  selector: 'app-navbar-organizator',
  templateUrl: './navbar-organizator.component.html',
  styleUrls: ['./navbar-organizator.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
})
export class NavbarOrganizatorComponent {

}
