import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-board-page-topbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="board-topbar">
      <div class="topbar-left">
        <span class="logo">DevFlow</span>
        <nav class="top-links" aria-label="Main sections">
          <a href="#">Project</a>
          <a href="#">Repository</a>
          <a class="is-active" href="#">Analytics</a>
        </nav>
      </div>

      <div class="topbar-right">
        <label class="search-box" aria-label="Search global">
          <span class="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search..." />
        </label>

        <button class="icon-btn" type="button" aria-label="Notifications">
          <span class="material-symbols-outlined">notifications</span>
          <span class="notification-dot" aria-hidden="true"></span>
        </button>

        <button class="icon-btn" type="button" aria-label="Settings">
          <span class="material-symbols-outlined">settings</span>
        </button>

        <img
          class="avatar"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA03qSEOzpAy-mj3as9F9ODPONnnU78HKvfzFZAfivHazvVOwspQFAl-x4NWqybPP_Z3B9P5AgMY6-E67na9pzEEAd8czWm_qdXOz8ACZAF9iWrq-y71aC-Rw5ymWu83Q4B5963XuA9JMqhrUTDPHIOkzOwIPoJgXIHh_F_x-laHxVPO4Mhi_z3AMlGdS_iokBeKLBEG_COUPXtZNDRZgH-37gbzCQfF9PJDNcdbxRR9Nofq_dryXQdj1wInLLKrAubV8Fw7XbJulnq"
          alt="Lead developer avatar"
        />
      </div>
    </header>
  `,
  styleUrl: './board-page-topbar.component.scss'
})
export class BoardPageTopbarComponent {}
