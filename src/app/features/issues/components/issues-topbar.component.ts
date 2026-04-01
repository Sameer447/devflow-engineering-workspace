import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-issues-topbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="issues-topbar">
      <div class="left-zone">
        <nav class="breadcrumbs" aria-label="Issue navigation breadcrumb">
          <span>DevFlow</span>
          <span class="material-symbols-outlined crumb-separator">chevron_right</span>
          <span>Issues</span>
          <span class="material-symbols-outlined crumb-separator">chevron_right</span>
          <span class="current">All</span>
        </nav>

        <div class="divider" aria-hidden="true"></div>

        <label class="search-wrap" aria-label="Search issues">
          <span class="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search issues..." />
        </label>
      </div>

      <div class="right-zone">
        <nav class="sub-links" aria-label="Issue sub navigation">
          <a href="#">My Tasks</a>
          <a href="#">Assigned</a>
          <a href="#">Activity</a>
        </nav>

        <div class="divider" aria-hidden="true"></div>

        <div class="actions">
          <button type="button" aria-label="Notifications">
            <span class="material-symbols-outlined">notifications</span>
          </button>
          <button type="button" aria-label="Help">
            <span class="material-symbols-outlined">help_outline</span>
          </button>
          <button type="button" class="invite-btn">Invite</button>
        </div>
      </div>
    </header>
  `,
  styleUrl: './issues-topbar.component.scss'
})
export class IssuesTopbarComponent {}
