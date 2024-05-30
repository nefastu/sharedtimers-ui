import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ITimerSet } from '../models/TimerSet';
import { ITimerSelectionEntry } from '../models/TimerSelectionEntry';

@Injectable({
  providedIn: 'root'
})
export class TimerEditorService {
  private localStorage: LocalStorageService = inject(LocalStorageService);
  timerSelection: WritableSignal<ITimerSelectionEntry[]> = signal([]);

  constructor() {
    this.timerSelection.set(this.localStorage.timerSelection);
  }

  saveTimers(timers: ITimerSet) {
    timers.updated = new Date();
    this.localStorage.setTimerSet(timers);
    this.updateTimerSetSelection(timers);
  }

  getTimers(timerSetId: string) {
    return this.localStorage.getTimerSet(timerSetId);
  }

  private updateTimerSetSelection(timers: ITimerSet) {
    const currentTimerSetSelection = this.localStorage.timerSelection;
    const index = currentTimerSetSelection.findIndex(a => a.id === timers.id);
    if (index === -1) {
      // timers are new
      currentTimerSetSelection.push({
        created: timers.created,
        displayName: timers.displayName,
        group: timers.group,
        id: timers.id, 
        updated: timers.updated
      } as ITimerSelectionEntry);
    } else {
      currentTimerSetSelection[index].displayName = timers.displayName;
      currentTimerSetSelection[index].group = timers.group;
      currentTimerSetSelection[index].updated = timers.updated;
    }
    this.localStorage.timerSelection = currentTimerSetSelection;
    this.timerSelection.set(currentTimerSetSelection);
  }
}
