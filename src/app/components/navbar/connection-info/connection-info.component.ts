import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-connection-info',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './connection-info.component.html',
  styleUrl: './connection-info.component.scss'
})
export class ConnectionInfoComponent {
  buttonIcon: string = 'person';
  buttonTooltip: string = 'Local mode';

  demo() {
    // will be replaced with a route to confirm solo mode if connected
    // and which group to connect to if solo mode
    if (this.buttonIcon === 'person') {
      this.buttonIcon = 'group';
      this.buttonTooltip = 'Group mode, connected to #groupname';
    } else {
      this.buttonIcon = 'person';
      this.buttonTooltip = 'Local mode';
    }
  }
}
