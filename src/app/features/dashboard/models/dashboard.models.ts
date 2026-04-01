export interface DashboardNavItem {
  readonly icon: string;
  readonly label: string;
  readonly route?: string;
}

export interface KpiMetric {
  readonly label: string;
  readonly value: string;
  readonly accent: string;
  readonly icon: string;
  readonly chipBg: string;
  readonly trendIcon?: string;
  readonly trendText?: string;
  readonly progress?: number;
  readonly sparkline?: string;
}

export interface TaskItem {
  readonly title: string;
  readonly priorityColor: string;
  readonly tagLabel: string;
  readonly tagBg: string;
  readonly tagColor: string;
  readonly dueDate: string;
  readonly assignee: string;
  readonly assigneeBg: string;
}

export interface ActivityItem {
  readonly actor: string;
  readonly action: string;
  readonly target: string;
  readonly timeAgo: string;
  readonly avatarImage?: string;
  readonly avatarInitials?: string;
  readonly avatarBg?: string;
}

export interface ProjectProgress {
  readonly name: string;
  readonly tasks: string;
  readonly color: string;
  readonly progress: number;
}

export interface BoardCard {
  readonly title: string;
  readonly date?: string;
  readonly assignee?: string;
  readonly assigneeBg?: string;
  readonly done?: boolean;
  readonly reviewerInitials?: readonly string[];
  readonly leftAccent?: boolean;
}

export interface BoardColumn {
  readonly title: string;
  readonly count: string;
  readonly countBg: string;
  readonly countColor: string;
  readonly cards: readonly BoardCard[];
}
