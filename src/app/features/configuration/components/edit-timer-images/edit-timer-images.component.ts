import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FileImportComponent } from '../file-import/file-import.component';
import { ITimerSet } from '../../../shell/models/TimerSet';
import { ITimerImage } from '../../../shell/models/TimerImage';

@Component({
    selector: 'app-edit-timer-images',
    imports: [FormsModule, TooltipModule, FileImportComponent, CardModule, ButtonModule, InputTextModule],
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
