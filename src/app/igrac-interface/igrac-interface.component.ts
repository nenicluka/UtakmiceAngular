import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-igrac-interface',
  templateUrl: './igrac-interface.component.html',
  styleUrls: ['./igrac-interface.component.css'],
  standalone: true,
  imports: [IgracInterfaceComponent, NavbarComponent]
})
export class IgracInterfaceComponent {

}
