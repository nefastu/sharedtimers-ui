import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { version } from '../../../../../package.json';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-about-app',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule],
  templateUrl: './about-app.component.html',
  styleUrl: './about-app.component.scss'
})
export class AboutAppComponent {
  public version: string = version;

}
