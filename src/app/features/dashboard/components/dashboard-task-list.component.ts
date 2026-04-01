import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TaskItem } from '../models/dashboard.models';

@Component({
  selector: 'app-dashboard-task-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="task-shell">
      <header class="task-header">
        <div class="task-header-left">
          <h4>My tasks</h4>
          <div class="task-tabs">
            <button class="is-active" type="button">Active (8)</button>
            <button type="button">Completed (5)</button>
          </div>
        </div>
        <button class="more-btn" type="button" aria-label="More task options">
          <span class="material-symbols-outlined">more_horiz</span>
        </button>
      </header>

      <div class="task-list">
        @for (task of tasks(); track task.title) {
          <article class="task-item">
            <input type="checkbox" aria-label="Complete task" />
            <span class="priority-dot" [style.background]="task.priorityColor"></span>
            <span class="task-title">{{ task.title }}</span>
            <span class="task-tag" [style.background]="task.tagBg" [style.color]="task.tagColor">{{ task.tagLabel }}</span>
            <span class="task-date">{{ task.dueDate }}</span>
            <span class="assignee" [style.background]="task.assigneeBg">{{ task.assignee }}</span>
          </article>
        }

        <button class="quick-add" type="button">
          <span class="material-symbols-outlined">add</span>
          <span>Add a new task...</span>
        </button>
      </div>
    </section>
  `,
  styleUrl: './dashboard-task-list.component.scss'
})
export class DashboardTaskListComponent {
  readonly tasks = input.required<readonly TaskItem[]>();
}
