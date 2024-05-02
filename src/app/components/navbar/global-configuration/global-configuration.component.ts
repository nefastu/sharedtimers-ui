import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { GlobalConfigurationService } from '../../../services/global-configuration.service';
import { IGlobalSettings } from '../../../models/GlobalSettings';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-global-configuration',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatSliderModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule],
  templateUrl: './global-configuration.component.html',
  styleUrl: './global-configuration.component.scss'
})
export class GlobalConfigurationComponent {
  //public globalSettingsService = Inject(GlobalConfigurationService);

  constructor(public globalSettingsService: GlobalConfigurationService) {

  }

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
  }

  resetToDefault() {
    this.globalSettingsService.resetToDefault();
  }
}
