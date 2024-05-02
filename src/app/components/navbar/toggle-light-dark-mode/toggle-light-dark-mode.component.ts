import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-toggle-light-dark-mode',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './toggle-light-dark-mode.component.html',
  styleUrl: './toggle-light-dark-mode.component.scss'
})
export class ToggleLightDarkModeComponent implements OnInit {
  public dark: string = "dark-theme";
  public light: string = "light-theme";

  currentMode: string = this.dark;

  ngOnInit(): void {
    this.initCurrentMode();
  }

  initCurrentMode() {
    if (document.body.classList.contains(this.dark)) {
      this.currentMode = this.dark;
    } else {
      this.currentMode = this.light;
    }
  }


  toggleLightDarkMode() {
    document.body.classList.toggle(this.dark);
    document.body.classList.toggle(this.light);
    this.initCurrentMode();
  }
}
