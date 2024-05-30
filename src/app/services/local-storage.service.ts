import { Injectable } from '@angular/core';
import { IGlobalSettings } from '../models/GlobalSettings';
import { ITimerSet } from '../models/TimerSet';
import { ITimerSelectionEntry } from '../models/TimerSelectionEntry';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private KEY_GLOBALSETTINGS = 'sharedtimers_globalsettings';
  private KEY_TIMERSELECTION = 'sharedtimers_timerselection';
  private PREFIX_TIMERSET = 'sharedtimers_timerset_';


  get globalSettings(): IGlobalSettings | null {
    return this.getLocalStorageEntry<IGlobalSettings>(this.KEY_GLOBALSETTINGS);
  }

  set globalSettings(value: IGlobalSettings) {
    localStorage.setItem(this.KEY_GLOBALSETTINGS, JSON.stringify(value));
  }

  get timerSelection(): ITimerSelectionEntry[] {
    const valueFromLocalStorage = this.getLocalStorageEntry<ITimerSelectionEntry[]>(this.KEY_TIMERSELECTION);
    if (valueFromLocalStorage === null) {
      return [];
    }
    return valueFromLocalStorage;
  }

  set timerSelection(value: ITimerSelectionEntry[]) {
    localStorage.setItem(this.KEY_TIMERSELECTION, JSON.stringify(value));
  }

  constructor() { }

  public setTimerSet(timerSet: ITimerSet) {
    localStorage.setItem(this.PREFIX_TIMERSET + timerSet.id, JSON.stringify(timerSet));
  }

  public getTimerSet(timerSetId: string): ITimerSet | null {
    return this.getLocalStorageEntry<ITimerSet>(this.PREFIX_TIMERSET + timerSetId);
  }

  private getLocalStorageEntry<T>(key: string): T | null {
    const rawValue = localStorage.getItem(key);
    if (rawValue !== null) {
      const parsedValue = JSON.parse(rawValue) as T;
      return parsedValue;
    }
    return rawValue;
  }
}
