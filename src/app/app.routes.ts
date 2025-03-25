import { Routes } from '@angular/router';
import { DashboardComponent } from './features/shell/components/dashboard/dashboard.component';
import { AboutAppComponent } from './features/shell/components/about-app/about-app.component';
import { GlobalConfigurationComponent } from './features/shell/components/global-configuration/global-configuration.component';
/*
import { EditTimersComponent } from './components/edit-timers/edit-timers.component';
import { editRoutes } from './edit.routes';
import { EditTimerDetailsComponent } from './components/edit-timers/edit-timer-details/edit-timer-details.component';
import { ImportTimerSetComponent } from './components/edit-timers/import-timer-set/import-timer-set.component';*/

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'about', component: AboutAppComponent },
    { path: 'settings', component: GlobalConfigurationComponent },
    { path: 'timers', loadChildren: () => import('./features/active-timers/active-timers.module').then(m => m.ActiveTimersModule) },
    { path: 'configuration', loadChildren:() => import('./features/configuration/configuration.module').then(m => m.ConfigurationModule) }
    /*{ path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'edit', component: EditTimersComponent },
    { path: 'edit/import', component: ImportTimerSetComponent },
    { path: 'edit/new', component: EditTimerDetailsComponent },
    { path: 'edit/:id', component: EditTimerDetailsComponent }*/
];
