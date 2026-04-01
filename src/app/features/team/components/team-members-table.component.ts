import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TeamMember } from '../models/team-management.models';

@Component({
  selector: 'app-team-members-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './team-members-table.component.html',
  styleUrl: './team-members-table.component.scss'
})
export class TeamMembersTableComponent {
  readonly members = input.required<readonly TeamMember[]>();

  protected roleTone(role: TeamMember['role']): string {
    return role.toLowerCase();
  }
}
