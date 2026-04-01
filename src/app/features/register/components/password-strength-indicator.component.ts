import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-password-strength-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="strength-grid" [attr.data-level]="clampedLevel()" aria-hidden="true">
      @for (segment of segments; track segment) {
        <span class="strength-segment"></span>
      }
    </div>
    <p class="strength-label">{{ label() }}</p>
  `,
  styleUrl: './password-strength-indicator.component.scss'
})
export class PasswordStrengthIndicatorComponent {
  readonly level = input.required<number>();
  readonly label = input.required<string>();
  readonly segments = [0, 1, 2, 3];

  readonly clampedLevel = computed(() => Math.max(0, Math.min(4, this.level())));
}
