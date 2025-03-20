import { Component, inject } from '@angular/core';
import { GlobalConfigurationService } from '../../services/global-configuration/global-configuration.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { InputNumberModule } from 'primeng/inputnumber';
import { RouterLink } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-global-configuration',
    imports: [FormsModule, CommonModule, CardModule, ButtonModule, SliderModule, InputNumberModule, RouterLink, ToastModule],
    templateUrl: './global-configuration.component.html',
    styleUrl: './global-configuration.component.scss'
})
export class GlobalConfigurationComponent {
  public globalSettingsService = inject(GlobalConfigurationService);
  private messageService = inject(MessageService);


  updateVolume(newValue: number) {
    this.globalSettingsService.config.update(a => {
      a.defaultVolume = newValue;
      return a;
    });
  }

  updateInterval(newValue: number) {
    this.globalSettingsService.config.update(a => {
      a.defaultTimerAdjustInterval = newValue;
      return a;
    });
  }

  saveSettings() {
    this.globalSettingsService.saveSettings();
    this.messageService.add({
      severity: 'success',
      summary: 'Saved global settings in browser.'
    });
  }

  resetToDefault() {
    this.globalSettingsService.resetToDefault();
  }
}
