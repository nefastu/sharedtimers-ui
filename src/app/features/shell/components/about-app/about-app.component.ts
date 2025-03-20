import { Component } from '@angular/core';
import { version } from '../../../../../../package.json';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
    selector: 'app-about-app',
    imports: [CardModule, ButtonModule, DividerModule],
    templateUrl: './about-app.component.html',
    styleUrl: './about-app.component.scss'
})
export class AboutAppComponent {
  public version: string = version;

}
