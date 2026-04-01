import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface RegisterFeatureItem {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

@Component({
  selector: 'app-register-feature-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="feature-list" aria-label="DevFlow highlights">
      @for (item of items(); track item.title) {
        <article class="feature-row">
          <div class="icon-shell" aria-hidden="true">
            <span class="material-symbols-outlined">{{ item.icon }}</span>
          </div>
          <div>
            <p class="feature-title">{{ item.title }}</p>
            <p class="feature-description">{{ item.description }}</p>
          </div>
        </article>
      }
    </div>
  `,
  styleUrl: './register-feature-list.component.scss'
})
export class RegisterFeatureListComponent {
  readonly items = input.required<readonly RegisterFeatureItem[]>();
}
