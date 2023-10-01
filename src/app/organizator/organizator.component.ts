import { Component } from '@angular/core';
import { NavbarOrganizatorComponent } from './navbar-organizator/navbar-organizator.component';

@Component({
  selector: 'app-organizator',
  templateUrl: './organizator.component.html',
  styleUrls: ['./organizator.component.css'],
  standalone: true,
  imports: [OrganizatorComponent, NavbarOrganizatorComponent]
})
export class OrganizatorComponent {

}
