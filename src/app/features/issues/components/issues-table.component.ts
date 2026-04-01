import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IssueRow } from '../models/issue.models';

@Component({
  selector: 'app-issues-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './issues-table.component.html',
  styleUrl: './issues-table.component.scss'
})
export class IssuesTableComponent {
  readonly issues = input.required<readonly IssueRow[]>();
  readonly issueSelected = output<IssueRow>();

  protected selectIssue(issue: IssueRow): void {
    this.issueSelected.emit(issue);
  }
}
