import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RolePermissionRow } from '../models/team-management.models';

@Component({
  selector: 'app-team-role-permissions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './team-role-permissions.component.html',
  styleUrl: './team-role-permissions.component.scss'
})
export class TeamRolePermissionsComponent {
  readonly rows = input.required<readonly RolePermissionRow[]>();
}
