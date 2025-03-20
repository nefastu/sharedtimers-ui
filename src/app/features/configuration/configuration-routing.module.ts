import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTimersComponent } from './components/edit-timers/edit-timers.component';
import { ImportTimerSetComponent } from './components/import-timer-set/import-timer-set.component';
import { EditTimerDetailsComponent } from './components/edit-timer-details/edit-timer-details.component';

const routes: Routes = [
  { path: '', component: EditTimersComponent },
  { path: 'import', component: ImportTimerSetComponent },
  { path: 'edit/new', component: EditTimerDetailsComponent },
  { path: 'edit/:id', component: EditTimerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
