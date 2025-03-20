import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LayoutService } from '../../services/layout/layout.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  private layoutService = inject(LayoutService);

}
