import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITimerSet } from '../../../models/TimerSet';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-timer-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, CommonModule, FormsModule],
  templateUrl: './edit-timer-details.component.html',
  styleUrl: './edit-timer-details.component.scss'
})
export class EditTimerDetailsComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  public isNew: boolean = false;
  public timerData: ITimerSet = {maxDuration: 600} as ITimerSet;

  ngOnInit(): void {
    this.route.url.subscribe({
      next: (url) => {
        if (url.length >= 2 && url[1].path === 'new') {
          this.initNewMode();
        }
      }
    });
  }

  initNewMode() {
    this.isNew = true;
  }

  saveNewTimers() {
    
  }
}
