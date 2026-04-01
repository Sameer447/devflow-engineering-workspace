import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IssueDetail } from '../models/issue-detail.models';

@Component({
  selector: 'app-issue-detail-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './issue-detail-drawer.component.html',
  styleUrl: './issue-detail-drawer.component.scss'
})
export class IssueDetailDrawerComponent {
  readonly detail = input.required<IssueDetail>();

  readonly closeRequested = output<void>();
  readonly expandRequested = output<void>();

  protected onClose(): void {
    this.closeRequested.emit();
  }

  protected onExpand(): void {
    this.expandRequested.emit();
  }
}
