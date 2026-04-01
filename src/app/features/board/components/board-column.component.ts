import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { BoardColumn, BoardTaskCard } from '../models/board.models';

@Component({
  selector: 'app-board-column',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CdkDropList, CdkDrag],
  templateUrl: './board-column.component.html',
  styleUrl: './board-column.component.scss'
})
export class BoardColumnComponent {
  readonly column = input.required<BoardColumn>();
  readonly connectedDropListIds = input.required<string[]>();
  readonly cardDropped = output<CdkDragDrop<BoardTaskCard[]>>();

  protected priorityClass(priority: BoardColumn['cards'][number]['priority']): string {
    return `priority-${priority}`;
  }

  protected dropListConnections(): string[] {
    return this.connectedDropListIds().filter((dropListId) => dropListId !== this.column().id);
  }

  protected onDrop(event: CdkDragDrop<BoardTaskCard[]>): void {
    this.cardDropped.emit(event);
  }
}
