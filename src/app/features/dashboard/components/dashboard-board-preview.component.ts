import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BoardColumn } from '../models/dashboard.models';

@Component({
  selector: 'app-dashboard-board-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="board-shell">
      <header class="board-header">
        <h4>Board Preview</h4>
        <button type="button">Open full board</button>
      </header>

      <div class="board-grid">
        @for (column of columns(); track column.title) {
          <article class="board-column">
            <header>
              <h5>{{ column.title }}</h5>
              <span [style.background]="column.countBg" [style.color]="column.countColor">{{ column.count }}</span>
            </header>

            <div class="cards">
              @for (card of column.cards; track card.title) {
                <article class="board-card" [class.is-done]="!!card.done" [class.has-accent]="!!card.leftAccent">
                  <p>{{ card.title }}</p>
                  <footer>
                    @if (card.done) {
                      <span class="material-symbols-outlined done-icon">check_circle</span>
                    } @else if (card.date) {
                      <span class="date">{{ card.date }}</span>
                    }

                    @if (card.reviewerInitials) {
                      <span class="stacked-avatars">
                        @for (initial of card.reviewerInitials; track initial) {
                          <span>{{ initial }}</span>
                        }
                      </span>
                    } @else if (card.assignee) {
                      <span class="single-avatar" [style.background]="card.assigneeBg">{{ card.assignee }}</span>
                    }
                  </footer>
                </article>
              }
            </div>
          </article>
        }
      </div>
    </section>
  `,
  styleUrl: './dashboard-board-preview.component.scss'
})
export class DashboardBoardPreviewComponent {
  readonly columns = input.required<readonly BoardColumn[]>();
}
