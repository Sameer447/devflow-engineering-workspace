import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IssueMetric } from '../models/issue.models';

@Component({
  selector: 'app-issues-metrics',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="metrics-grid" aria-label="Issue metrics">
      @for (metric of metrics(); track metric.label) {
        <article class="metric-card">
          <div class="metric-head">
            <span class="metric-label">{{ metric.label }}</span>
            <span class="material-symbols-outlined" [class]="'metric-icon ' + metric.tone">{{ metric.icon }}</span>
          </div>

          <p class="metric-value">
            {{ metric.value }}
            @if (metric.valueSuffix) {
              <span>{{ metric.valueSuffix }}</span>
            }
          </p>

          <p class="metric-note" [class]="'metric-note ' + metric.tone">{{ metric.note }}</p>
        </article>
      }
    </section>
  `,
  styleUrl: './issues-metrics.component.scss'
})
export class IssuesMetricsComponent {
  readonly metrics = input.required<readonly IssueMetric[]>();
}
