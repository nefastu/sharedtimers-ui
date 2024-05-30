import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TimerEditorService } from '../../services/timer-editor.service';

@Component({
  selector: 'app-edit-timers',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './edit-timers.component.html',
  styleUrl: './edit-timers.component.scss'
})
export class EditTimersComponent {
  public editTimersService: TimerEditorService = inject(TimerEditorService);

}
