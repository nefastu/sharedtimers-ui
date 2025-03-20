import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
// @ts-ignore
import { generateId } from 'zoo-ids';

@Component({
    selector: 'app-connection-info',
    imports: [ButtonModule, TooltipModule],
    templateUrl: './connection-info.component.html',
    styleUrl: './connection-info.component.scss'
})
export class ConnectionInfoComponent {
  buttonIcon: string = 'pi pi-user';
  buttonTooltip: string = 'Local mode';
  groupName: string = '#groupname';

  userName: string = generateId(null, {caseStyle: 'titlecase', delimiter: ' '});

  constructor() {

  }

  demo() {
    // will be replaced with a route to confirm solo mode if connected
    // and which group to connect to if solo mode
    if (this.buttonIcon === 'pi pi-user') {
      this.buttonIcon = 'pi pi-users';
      this.buttonTooltip = 'Group mode, connected to #groupname';
    } else {
      this.buttonIcon = 'pi pi-user';
      this.buttonTooltip = 'Local mode';
    }
  }
}
