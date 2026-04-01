import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/theme.service';

interface LoginHighlight {
  readonly icon: string;
  readonly text: string;
}

@Component({
  selector: 'app-login-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: 'login-page.component.html',
  styleUrl: 'login-page.component.scss'
})
export class LoginPageComponent {
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly themeService = inject(ThemeService);
  protected readonly showPassword = signal(false);

  protected readonly highlights: readonly LoginHighlight[] = [
    { icon: 'view_kanban', text: 'Agile Kanban Workflows' },
    { icon: 'groups', text: 'Real-time Engineer Collaboration' },
    { icon: 'bar_chart_4_bars', text: 'Advanced Velocity Metrics' }
  ];

  protected readonly loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  protected togglePasswordVisibility(): void {
    this.showPassword.update((current) => !current);
  }

  protected submit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loginForm.reset({ email: '', password: '' });
  }
}
