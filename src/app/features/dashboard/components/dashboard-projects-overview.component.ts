import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProjectProgress } from '../models/dashboard.models';

@Component({
  selector: 'app-dashboard-projects-overview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="project-shell">
      <h4>Projects overview</h4>

      <div class="project-list">
        @for (project of projects(); track project.name) {
          <article class="project-item">
            <span class="dot" [style.background]="project.color"></span>
            <div class="meta">
              <div class="row">
                <span class="name">{{ project.name }}</span>
                <span class="tasks">{{ project.tasks }}</span>
              </div>
              <div class="track">
                <span class="fill" [style.width.%]="project.progress" [style.background]="project.color"></span>
              </div>
            </div>
          </article>
        }
      </div>
    </section>
  `,
  styleUrl: './dashboard-projects-overview.component.scss'
})
export class DashboardProjectsOverviewComponent {
  readonly projects = input.required<readonly ProjectProgress[]>();
}
