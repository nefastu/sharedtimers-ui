import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITimerSet } from '../../../../models/TimerSet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FileImportComponent } from '../../../file-import/file-import.component';
import { ITimerImage } from '../../../../models/TimerImage';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-edit-timer-images',
    imports: [MatFormFieldModule, FormsModule, MatTooltipModule, FileImportComponent, MatCardModule, MatIconModule, MatButtonModule, MatInputModule],
    templateUrl: './edit-timer-images.component.html',
    styleUrl: './edit-timer-images.component.scss'
})
export class EditTimerImagesComponent {
  @Input() timerData: ITimerSet = {} as ITimerSet;
  @Input() showImageUpload: boolean = false;
  @Output() backToOverview: EventEmitter<boolean> = new EventEmitter();


  addImageToTimerSet(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const newImage = {
        extension: file.type,
        fileName: file.name,
        name: file.name,
        base64Data: reader.result
      } as ITimerImage;
      if (!this.timerData.images) {
        this.timerData.images = [];
      }
      this.timerData.images.push(newImage);
      this.showImageUpload = false;
    };
    reader.onerror = () => {
      console.error("cannot handle image upload");
    }
  }
}
