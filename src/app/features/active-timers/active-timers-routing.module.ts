import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveTimersComponent } from './components/active-timers/active-timers.component';
import { TimerSetSelectionComponent } from './components/timer-set-selection/timer-set-selection.component';

const routes: Routes = [
  { path: '', component: ActiveTimersComponent },
  { path: 'selection', component: TimerSetSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveTimersRoutingModule { }
