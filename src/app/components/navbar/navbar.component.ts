import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { ToggleLightDarkModeComponent } from './toggle-light-dark-mode/toggle-light-dark-mode.component';
import { GlobalConfigurationComponent } from './global-configuration/global-configuration.component';
import { AboutAppComponent } from './about-app/about-app.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, MatMenuModule, ToggleLightDarkModeComponent, GlobalConfigurationComponent, AboutAppComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
