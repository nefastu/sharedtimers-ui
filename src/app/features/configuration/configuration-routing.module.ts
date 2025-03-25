import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTimersComponent } from './components/edit-timers/edit-timers.component';
import { EditResourcesComponent } from './components/edit-resources/edit-resources.component';
import { ImageNewComponent } from './components/images/image-new/image-new.component';
import { ImageDetailsComponent } from './components/images/image-details/image-details.component';
//import { ImportTimerSetComponent } from './components/import-timer-set/import-timer-set.component';
//import { EditTimerDetailsComponent } from './components/edit-timer-details/edit-timer-details.component';

const routes: Routes = [
  { path: 'timers', component: EditTimersComponent },
  //{ path: 'import', component: ImportTimerSetComponent },
  /*{ path: 'edit/new', component: EditTimerDetailsComponent },
  { path: 'edit/:id', component: EditTimerDetailsComponent }*/
  { path: 'resources', component: EditResourcesComponent },
  { path: 'resources/images/new', component: ImageNewComponent },
  { path: 'resources/images/:id', component: ImageDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
