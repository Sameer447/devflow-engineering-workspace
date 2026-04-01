export interface IssueNavItem {
  readonly icon: string;
  readonly label: string;
  readonly route?: string;
}

export interface IssueRow {
  readonly id: string;
  readonly status: {
    readonly label: 'IN PROGRESS' | 'TODO' | 'DONE';
    readonly tone: 'progress' | 'todo' | 'done';
  };
  readonly priority: {
    readonly label: 'URGENT' | 'HIGH' | 'MEDIUM' | 'LOW';
    readonly tone: 'urgent' | 'high' | 'medium' | 'low';
  };
  readonly title: string;
  readonly project: string;
  readonly assignee: {
    readonly name: string;
    readonly avatarUrl?: string;
  };
  readonly createdAt: string;
}

export interface IssueMetric {
  readonly label: string;
  readonly value: string;
  readonly valueSuffix?: string;
  readonly note: string;
  readonly icon: string;
  readonly tone: 'velocity' | 'bugs' | 'cycle' | 'deployment';
}
