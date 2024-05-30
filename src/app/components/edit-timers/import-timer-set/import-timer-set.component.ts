import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FileImportComponent } from '../../file-import/file-import.component';
import { ITimerSet } from '../../../models/TimerSet';
import { TimerEditorService } from '../../../services/timer-editor.service';
import { ITimerSelectionEntry } from '../../../models/TimerSelectionEntry';
import { Router } from '@angular/router';

@Component({
  selector: 'app-import-timer-set',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, CommonModule, FormsModule, FileImportComponent],
  templateUrl: './import-timer-set.component.html',
  styleUrl: './import-timer-set.component.scss'
})
export class ImportTimerSetComponent {
  public timerEditorService: TimerEditorService = inject(TimerEditorService);
  private router: Router = inject(Router);
  importedTimers = {} as ITimerSet;
  hasImportedTimers = false;
  overwritesTimers = false;
  overwritesTimersData = {} as ITimerSelectionEntry;

  onTimerUploaded(file: File) {
    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = () => {
      if (fileReader.result === null) {
        console.error("cannot parse json");
      } else {
        this.importedTimers = JSON.parse(fileReader.result as string);
        this.overwritesTimers = this.timerEditorService.timerSelection().some(a => a.id === this.importedTimers.id);
        if (this.overwritesTimers) {
          this.overwritesTimersData = this.timerEditorService.timerSelection().find(a => a.id === this.importedTimers.id) ?? {} as ITimerSelectionEntry;
        }
        this.hasImportedTimers = true;
      }
    };
    fileReader.onerror = () => {
      console.error("cannot parse json");
    }
  }

  importTimers() {
    this.timerEditorService.saveTimers(this.importedTimers);
    this.router.navigate(['/edit/' + this.importedTimers.id]);
  }
}
