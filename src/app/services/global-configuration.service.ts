import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { IGlobalSettings } from '../models/GlobalSettings';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalConfigurationService {
  private localStorageService: LocalStorageService = inject(LocalStorageService);
  public config: WritableSignal<IGlobalSettings> = signal(this.getDefaultSettings());

  constructor() {
    this.initSettings();
  }

  saveSettings() {
    this.localStorageService.globalSettings = this.config();
  }

  resetToDefault() {
    this.config.set(this.getDefaultSettings());
    this.saveSettings();
  }

  private initSettings() {
    const settings = this.localStorageService.globalSettings;
    if (settings !== null) {
      this.config.set(settings);
    }
  }

  private getDefaultSettings(): IGlobalSettings {
    return {
    defaultTimerAdjustInterval: 1000,
    defaultVolume: 100,
    hotkeys: []
    } as IGlobalSettings;
  }
}
