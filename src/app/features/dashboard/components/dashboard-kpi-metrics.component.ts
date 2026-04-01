import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { KpiMetric } from '../models/dashboard.models';

@Component({
  selector: 'app-dashboard-kpi-metrics',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="metrics-grid" aria-label="Key performance metrics">
      @for (metric of metrics(); track metric.label) {
        <article class="metric-card">
          <div class="metric-content">
            <div>
              <p class="metric-label">{{ metric.label }}</p>
              <h3 class="metric-value" [style.color]="metric.accent">{{ metric.value }}</h3>
            </div>

            @if (metric.sparkline) {
              <div class="sparkline-wrap" aria-hidden="true">
                <svg viewBox="0 0 100 30">
                  <path [attr.d]="metric.sparkline" fill="none" stroke="currentColor" stroke-width="2"></path>
                </svg>
              </div>
            } @else if (metric.progress !== undefined) {
              <div class="progress-wrap">
                <div class="progress-track">
                  <span class="progress-fill" [style.width.%]="metric.progress" [style.background]="metric.accent"></span>
                </div>
                <p class="progress-label">{{ metric.progress }}% OF GOAL</p>
              </div>
            } @else {
              <div class="trend-wrap">
                <span class="material-symbols-outlined" [style.color]="metric.accent">{{ metric.trendIcon }}</span>
                <span class="trend-text" [style.color]="metric.accent">{{ metric.trendText }}</span>
              </div>
            }
          </div>

          <div class="metric-icon" [style.color]="metric.accent" [style.background]="metric.chipBg">
            <span class="material-symbols-outlined">{{ metric.icon }}</span>
          </div>
        </article>
      }
    </section>
  `,
  styleUrl: './dashboard-kpi-metrics.component.scss'
})
export class DashboardKpiMetricsComponent {
  readonly metrics = input.required<readonly KpiMetric[]>();
}
