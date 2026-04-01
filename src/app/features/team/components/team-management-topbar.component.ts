import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-team-management-topbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './team-management-topbar.component.html',
  styleUrl: './team-management-topbar.component.scss'
})
export class TeamManagementTopbarComponent {}
