import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TimerEditorService } from '../../services/timer-editor/timer-editor.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-edit-timers',
    imports: [CardModule, ButtonModule, RouterLink],
    templateUrl: './edit-timers.component.html',
    styleUrl: './edit-timers.component.scss'
})
export class EditTimersComponent {
  public editTimersService: TimerEditorService = inject(TimerEditorService);

}
