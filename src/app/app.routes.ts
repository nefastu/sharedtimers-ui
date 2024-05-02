import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActiveTimersComponent } from './components/active-timers/active-timers.component';
import { EditTimersComponent } from './components/edit-timers/edit-timers.component';
import { GlobalConfigurationComponent } from './components/navbar/global-configuration/global-configuration.component';
import { AboutAppComponent } from './components/navbar/about-app/about-app.component';
import { editRoutes } from './edit.routes';
import { EditTimerDetailsComponent } from './components/edit-timers/edit-timer-details/edit-timer-details.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'settings', component: GlobalConfigurationComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'about', component: AboutAppComponent },
    { path: 'timers', component: ActiveTimersComponent },
    { path: 'edit', component: EditTimersComponent },
    { path: 'edit/new', component: EditTimerDetailsComponent }
];
