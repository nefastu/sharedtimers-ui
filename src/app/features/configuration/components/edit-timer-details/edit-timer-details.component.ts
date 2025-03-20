import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { ITimerSet } from '../../../shell/models/TimerSet';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { EditTimerEventsComponent } from '../edit-timer-events/edit-timer-events.component';
import { EditTimerImagesComponent } from '../edit-timer-images/edit-timer-images.component';
import { EditTimerSoundsComponent } from '../edit-timer-sounds/edit-timer-sounds.component';
import { FileImportComponent } from '../file-import/file-import.component';
import { TimerEditorService } from '../../services/timer-editor/timer-editor.service';

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
    imports: [CardModule, ButtonModule, InputTextModule, CommonModule, FormsModule,
        FileImportComponent, TooltipModule, EditTimerImagesComponent, EditTimerSoundsComponent, EditTimerEventsComponent],
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
