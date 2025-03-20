import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ITimerSet } from '../../../../models/TimerSet';
import { FileImportComponent } from '../../../file-import/file-import.component';
import { ITimerSound } from '../../../../models/TimerSound';

@Component({
    selector: 'app-edit-timer-sounds',
    imports: [MatCardModule, MatInputModule, FormsModule, MatTooltipModule, MatButtonModule, MatIconModule, FileImportComponent],
    templateUrl: './edit-timer-sounds.component.html',
    styleUrl: './edit-timer-sounds.component.scss'
})
export class EditTimerSoundsComponent {
  @Input() timerData: ITimerSet = {} as ITimerSet;
  @Output() backToOverview: EventEmitter<boolean> = new EventEmitter();
  public showUpload: boolean = false;


  addSoundToTimerSet(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const newImage = {
        extension: file.type,
        fileName: file.name,
        name: file.name,
        base64Data: reader.result
      } as ITimerSound;
      if (!this.timerData.sounds) {
        this.timerData.sounds = [];
      }
      this.timerData.sounds.push(newImage);
      this.showUpload = false;
    };
    reader.onerror = () => {
      console.error("cannot handle sound upload");
    }
  }
}
