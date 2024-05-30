import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-import',
  standalone: true,
  imports: [],
  templateUrl: './file-import.component.html',
  styleUrl: './file-import.component.scss'
})
export class FileImportComponent {
  @Input() isMultiple: boolean = false;
  @Output() uploadedFile: EventEmitter<File> = new EventEmitter<File>();
  @Output() uploadedFiles: EventEmitter<FileList> = new EventEmitter<FileList>();

  fileUploadEvent(event: any) {
    if (this.isMultiple) {
      this.uploadedFiles.emit(event.target.files);
    } else {
      if (event && event.target && event.target.files && event.target.files.length > 0) {
        this.uploadedFile.emit(event.target.files[0]);
      }
    }
  }
}
