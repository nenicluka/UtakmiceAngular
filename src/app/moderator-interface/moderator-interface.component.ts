import { Component } from '@angular/core';
import { NavbarModeratorComponent } from './navbar-moderator/navbar-moderator.component';

@Component({
  selector: 'app-moderator-interface',
  templateUrl: './moderator-interface.component.html',
  styleUrls: ['./moderator-interface.component.css'],
  standalone: true,
  imports: [ModeratorInterfaceComponent, NavbarModeratorComponent]
  
})
export class ModeratorInterfaceComponent {

}
