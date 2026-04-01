import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { startWith } from 'rxjs';
import { ThemeService } from '../../core/theme.service';
import { PasswordStrengthIndicatorComponent } from './components/password-strength-indicator.component';
import { RegisterFeatureItem, RegisterFeatureListComponent } from './components/register-feature-list.component';

interface PasswordStrength {
  readonly level: number;
  readonly label: string;
}

const passwordsMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value ?? '';
  const confirmPassword = control.get('confirmPassword')?.value ?? '';
  return password === confirmPassword ? null : { passwordMismatch: true };
};

@Component({
  selector: 'app-register-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink, RegisterFeatureListComponent, PasswordStrengthIndicatorComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly themeService = inject(ThemeService);

  protected readonly highlights: readonly RegisterFeatureItem[] = [
    {
      icon: 'terminal',
      title: 'Orchestrated Precision',
      description: 'High-end workspace mirroring senior engineer mental models.'
    },
    {
      icon: 'schema',
      title: 'Visual Architecture',
      description: 'Tonal depth and editorial layouts for distraction-free building.'
    },
    {
      icon: 'bolt',
      title: 'Developer Flow',
      description: 'Automated workflows designed for speed and reliability.'
    }
  ];

  protected readonly registerForm = this.fb.group(
    {
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      termsAccepted: [false, [Validators.requiredTrue]]
    },
    { validators: passwordsMatchValidator }
  );

  private readonly passwordValue = toSignal(
    this.registerForm.controls.password.valueChanges.pipe(
      startWith(this.registerForm.controls.password.value)
    ),
    { initialValue: this.registerForm.controls.password.value }
  );

  protected readonly passwordStrength = computed<PasswordStrength>(() => {
    const value = this.passwordValue();
    const score = this.calculatePasswordScore(value);

    if (score <= 1) {
      return { level: score === 0 ? 0 : 1, label: score === 0 ? 'Too weak' : 'Weak' };
    }

    if (score === 2) {
      return { level: 2, label: 'Fair' };
    }

    if (score === 3) {
      return { level: 3, label: 'Medium' };
    }

    return { level: 4, label: 'Strong' };
  });

  protected submit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.registerForm.reset({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsAccepted: false
    });
  }

  private calculatePasswordScore(value: string): number {
    if (!value) {
      return 0;
    }

    let score = 0;

    if (value.length >= 8) {
      score += 1;
    }

    if (/[A-Z]/.test(value) && /[a-z]/.test(value)) {
      score += 1;
    }

    if (/\d/.test(value)) {
      score += 1;
    }

    if (/[^A-Za-z0-9]/.test(value)) {
      score += 1;
    }

    return score;
  }
}
