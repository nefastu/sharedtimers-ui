import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ToggleLightDarkModeComponent } from '../toggle-light-dark-mode/toggle-light-dark-mode.component';
import { RouterLink } from '@angular/router';
import { ConnectionInfoComponent } from '../connection-info/connection-info.component';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-navbar',
    imports: [ToolbarModule, ButtonModule, MenuModule, ToggleLightDarkModeComponent, RouterLink, ConnectionInfoComponent],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    public menuItems: MenuItem[] = [
        {
            label: 'Configuration',
            items: [
                {
                    label: 'Configuration',
                    icon: 'pi pi-fw pi-cog',
                    routerLink: ['/settings']
                }
            ]
        },
        {
            label: 'About',
            items: [
                {
                    label: 'About this app',
                    icon: 'pi pi-fw pi-info',
                    routerLink: ['/about']
                }
            ]
        }
    ]

}
