import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LayoutService } from '../../services/layout/layout.service';

@Component({
    selector: 'app-toggle-light-dark-mode',
    imports: [ButtonModule],
    templateUrl: './toggle-light-dark-mode.component.html',
    styleUrl: './toggle-light-dark-mode.component.scss'
})
export class ToggleLightDarkModeComponent {
  private layoutService = inject(LayoutService);
  private darkClassName = 'app-dark';
  private localStoragePrefKey = 'sharedtimers-prefers-color-scheme';
  public currentColorScheme = 'light';

  transitionComplete = signal<boolean>(false);

  constructor() {
    this.initMode();
  }

  private initMode(): void {
    const savedPreference = localStorage.getItem(this.localStoragePrefKey);
    if (savedPreference !== null && savedPreference !== '' && (savedPreference === 'dark' || savedPreference === 'light')) {
      this.setMode(savedPreference, true);
      return;
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setMode('dark', true);
    }
  }

  toggleDarkMode() {
    if (this.currentColorScheme === 'light') {
      this.setMode('dark');
    } else {
      this.setMode('light');
    }
    this.savePreference();
  }

  setMode(mode: string, skipAnimation: boolean = false) {
    if (!skipAnimation && (document as any).startViewTransition) {
      const transition = (document as any).startViewTransition(() => {
        this.setModeToDocument(mode);
      });

      transition.ready
        .then(() => {
          this.onTransitionEnd();
        })
        .catch(() => {});
    } else {
      this.setModeToDocument(mode);
    }
    this.currentColorScheme = mode;
  }

  private onTransitionEnd() {
    this.transitionComplete.set(true);
    setTimeout(() => {
        this.transitionComplete.set(false);
    });
}

  private setModeToDocument(mode: string): void {
    if (document.documentElement.classList.contains(this.darkClassName) && mode === 'light') {
      document.documentElement.classList.remove(this.darkClassName);
    }

    if (!document.documentElement.classList.contains(this.darkClassName) && mode === 'dark') {
      document.documentElement.classList.add(this.darkClassName);
    }
  }

  savePreference(): void {
    localStorage.setItem(this.localStoragePrefKey, this.currentColorScheme);
  }
}
