import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
//import { TimerEditorService } from '../../services/timer-editor.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-dashboard',
    imports: [CardModule, ButtonModule, RouterModule, RouterLink],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  //public timerEditorService: TimerEditorService = inject(TimerEditorService);

}
