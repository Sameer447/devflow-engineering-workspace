import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-board-subheader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="subheader-shell" aria-label="Board toolbar">
      <div class="subheader-left">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <span>Projects</span>
          <span class="material-symbols-outlined">chevron_right</span>
          <span>DevFlow API</span>
          <span class="material-symbols-outlined">chevron_right</span>
          <span class="current">Board</span>
        </nav>

        <div class="divider" aria-hidden="true"></div>

        <div class="view-switch" role="group" aria-label="View mode">
          <button type="button" class="is-active" aria-label="Board grid view">
            <span class="material-symbols-outlined">grid_view</span>
          </button>
          <button type="button" aria-label="List view">
            <span class="material-symbols-outlined">list</span>
          </button>
          <button type="button" aria-label="Timeline view">
            <span class="material-symbols-outlined">view_timeline</span>
          </button>
        </div>
      </div>

      <div class="subheader-right">
        <button class="chip-btn" type="button">
          <span class="material-symbols-outlined">filter_list</span>
          <span>Filter</span>
          <span class="badge">2</span>
        </button>

        <div class="group-by">
          <span>Group by:</span>
          <button type="button">
            <span>Status</span>
            <span class="material-symbols-outlined">expand_more</span>
          </button>
        </div>

        <label class="search-box" aria-label="Search tasks">
          <span class="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search tasks..." />
        </label>

        <div class="divider" aria-hidden="true"></div>

        <button class="add-task" type="button">Add task</button>

        <button class="icon-btn" type="button" aria-label="Board settings">
          <span class="material-symbols-outlined">settings</span>
        </button>
      </div>
    </section>
  `,
  styleUrl: './board-subheader.component.scss'
})
export class BoardSubheaderComponent {}
