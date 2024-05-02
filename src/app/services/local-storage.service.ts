import { Injectable } from '@angular/core';
import { IGlobalSettings } from '../models/GlobalSettings';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private KEY_GLOBALSETTINGS = 'sharedtimers_globalsettings';


  get globalSettings(): IGlobalSettings | null {
    const rawValue = localStorage.getItem(this.KEY_GLOBALSETTINGS);
    if (rawValue !== null) {
      const parsedValue = JSON.parse(rawValue) as IGlobalSettings;
      return parsedValue;
    }
    return rawValue;
  }

  set globalSettings(value: IGlobalSettings) {
    localStorage.setItem(this.KEY_GLOBALSETTINGS, JSON.stringify(value));
  }

  constructor() { }
}
