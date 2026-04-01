import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ActivityItem } from '../models/dashboard.models';

@Component({
  selector: 'app-dashboard-activity-feed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="activity-shell">
      <h4>Activity</h4>

      <div class="activity-list">
        <span class="timeline" aria-hidden="true"></span>

        @for (item of activities(); track item.actor + item.timeAgo) {
          <article class="activity-item">
            @if (item.avatarImage) {
              <img [src]="item.avatarImage" [alt]="item.actor + ' avatar'" />
            } @else {
              <span class="initials" [style.background]="item.avatarBg">{{ item.avatarInitials }}</span>
            }

            <div>
              <p>
                <span class="strong">{{ item.actor }}</span>
                {{ item.action }}
                <span class="target">'{{ item.target }}'</span>
              </p>
              <span class="time">{{ item.timeAgo }}</span>
            </div>
          </article>
        }
      </div>
    </section>
  `,
  styleUrl: './dashboard-activity-feed.component.scss'
})
export class DashboardActivityFeedComponent {
  readonly activities = input.required<readonly ActivityItem[]>();
}
