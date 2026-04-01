export interface TeamNavItem {
  readonly icon: string;
  readonly label: string;
  readonly route?: string;
  readonly active?: boolean;
}

export interface PendingInvite {
  readonly email: string;
  readonly role: string;
  readonly sentAgo: string;
}

export interface TeamMember {
  readonly name: string;
  readonly email: string;
  readonly role: 'Owner' | 'Admin' | 'Member' | 'Viewer';
  readonly joinedAt: string;
  readonly lastActive: string;
  readonly online: boolean;
  readonly isCurrentUser?: boolean;
  readonly initials?: string;
  readonly avatarUrl?: string;
}

export interface RolePermissionRow {
  readonly action: string;
  readonly viewer: boolean;
  readonly member: boolean;
  readonly admin: boolean;
  readonly owner: boolean;
}
