import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PendingInvite } from '../models/team-management.models';

@Component({
  selector: 'app-team-invite-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './team-invite-section.component.html',
  styleUrl: './team-invite-section.component.scss'
})
export class TeamInviteSectionComponent {
  readonly pendingInvite = input.required<PendingInvite>();
}
