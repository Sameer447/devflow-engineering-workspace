import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-board-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="board-sidebar" aria-label="Board navigation">
      <div class="brand-block">
        <h1>Project Alpha</h1>
        <p>V2.4.0-stable</p>
      </div>

      <nav class="board-nav">
        <a
          class="nav-item"
          routerLink="/board"
          routerLinkActive="is-active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <span class="material-symbols-outlined">grid_view</span>
          <span>Board</span>
        </a>

        <a class="nav-item" routerLink="/issues" routerLinkActive="is-active">
          <span class="material-symbols-outlined">list_alt</span>
          <span>Backlog</span>
        </a>

        <a class="nav-item" href="#">
          <span class="material-symbols-outlined">schedule</span>
          <span>Timeline</span>
        </a>

        <a class="nav-item" href="#">
          <span class="material-symbols-outlined">group</span>
          <span>Team</span>
        </a>
      </nav>

      <div class="footer-actions">
        <button class="new-task-btn" type="button">New Task</button>

        <a class="nav-item" href="#">
          <span class="material-symbols-outlined">menu_book</span>
          <span>Documentation</span>
        </a>

        <a class="nav-item" href="#">
          <span class="material-symbols-outlined">contact_support</span>
          <span>Support</span>
        </a>
      </div>
    </aside>
  `,
  styleUrl: './board-sidebar.component.scss'
})
export class BoardSidebarComponent {}