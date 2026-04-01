import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'devflow-theme-mode';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly mode = signal<ThemeMode>('light');

  constructor() {
    if (this.isBrowser) {
      const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      const prefersDark = typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : false;
      const initialTheme: ThemeMode = storedTheme === 'dark' || storedTheme === 'light'
        ? storedTheme
        : (prefersDark ? 'dark' : 'light');

      this.mode.set(initialTheme);
    }

    effect(() => {
      const activeTheme = this.mode();
      const root = this.document.documentElement;
      root.setAttribute('data-theme', activeTheme);
      root.style.colorScheme = activeTheme;

      if (this.isBrowser) {
        localStorage.setItem(THEME_STORAGE_KEY, activeTheme);
      }
    });
  }

  toggleTheme(): void {
    this.mode.update((current) => current === 'dark' ? 'light' : 'dark');
  }

  themeToggleAriaLabel(): string {
    return this.mode() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
  }
}
