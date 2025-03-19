import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITimerSet } from '../../../models/TimerSet';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { TimerEditorService } from '../../../services/timer-editor.service';
import { FileImportComponent } from '../../file-import/file-import.component';
import { ITimerImage } from '../../../models/TimerImage';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ITimerSound } from '../../../models/TimerSound';
import { EditTimerImagesComponent } from './edit-timer-images/edit-timer-images.component';
import { EditTimerSoundsComponent } from './edit-timer-sounds/edit-timer-sounds.component';
import { EditTimerEventsComponent } from './edit-timer-events/edit-timer-events.component';

export enum EditTimerView {
  Overview = 0,
  Sounds = 1,
  Images = 2,
  PhaseOverview = 3,
  PhaseDetails = 4,
  NewTimerSet = 5,
  Events = 6
}

@Component({
    selector: 'app-edit-timer-details',
    imports: [MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, CommonModule, FormsModule,
        FileImportComponent, MatTooltipModule, EditTimerImagesComponent, EditTimerSoundsComponent, EditTimerEventsComponent],
    templateUrl: './edit-timer-details.component.html',
    styleUrl: './edit-timer-details.component.scss'
})
export class EditTimerDetailsComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private timerEditorService: TimerEditorService = inject(TimerEditorService);
  public isNew: boolean = false;
  public timerData: ITimerSet = {maxDuration: 600} as ITimerSet;

  public showImageUpload: boolean = false;
  public showSoundUpload: boolean = false;

  public viewMode: EditTimerView = EditTimerView.Overview;

  ngOnInit(): void {
    this.route.url.subscribe({
      next: (url) => {
        if (url.length >= 2 && url[1].path === 'new') {
          this.initNewMode();
        } else {
          this.initEditMode(url[1].path);
        }
      }
    });
  }

  generateId() {
    this.timerData.id = Guid.create().toString();
  }

  initNewMode() {
    this.isNew = true;
  }

  initEditMode(timerSetId: string) {
    const timerData = this.timerEditorService.getTimers(timerSetId);
    if (timerData === null) {
      this.router.navigate(['/404']);
      return;
    }
    this.timerData = timerData;
  }

  saveNewTimers() {
    // persist in local storage
    this.timerData.created = new Date();
    this.timerEditorService.saveTimers(this.timerData);
    // redirect to edit page with id
    this.router.navigate(['/edit/' + this.timerData.id]);
  }

  saveTimers() {
    this.timerEditorService.saveTimers(this.timerData);
  }

  exportTimers() {
    this.downloadJson(this.timerData, this.timerData.id);
  }

  downloadJson(myJson: any, filename: string){
    var sJson = JSON.stringify(myJson);
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', filename + ".json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }
}
