import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITimerSet } from '../../../../models/TimerSet';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ITimerEvent } from '../../../../models/TimerEvent';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-edit-timer-events',
  standalone: true,
  imports: [MatCardModule, MatInputModule, FormsModule, MatIconModule, MatButtonModule],
  templateUrl: './edit-timer-events.component.html',
  styleUrl: './edit-timer-events.component.scss'
})
export class EditTimerEventsComponent {
  @Input() timerData: ITimerSet = {} as ITimerSet;
  @Output() backToOverview: EventEmitter<boolean> = new EventEmitter();

  newEvent: ITimerEvent = {
    id: Guid.create().toString()
  } as ITimerEvent;

  public showNewSection: boolean = false;
}
