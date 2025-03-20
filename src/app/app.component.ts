import { Component } from '@angular/core';
import { ShellModule } from './features/shell/shell.module';
import { LayoutComponent } from "./features/shell/components/layout/layout.component";
import { LayoutService } from './features/shell/services/layout/layout.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-root',
    imports: [ShellModule, LayoutComponent],
    providers: [LayoutService, MessageService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sharedtimers-ui';
}
