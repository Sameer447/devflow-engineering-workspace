export interface BoardNavItem {
  readonly icon: string;
  readonly label: string;
  readonly route?: string;
}

export type TaskPriority = 'high' | 'urgent' | 'medium' | 'low';

export interface BoardTaskCard {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly priority: TaskPriority;
  readonly tags?: readonly string[];
  readonly dateLabel?: string;
  readonly avatarUrls?: readonly string[];
  readonly avatarInitials?: readonly string[];
  readonly iconCounts?: {
    readonly attachments?: string;
    readonly comments?: string;
  };
  readonly codeTask?: boolean;
  readonly done?: boolean;
  readonly overdue?: boolean;
  readonly inQuickCreate?: boolean;
  readonly dragging?: boolean;
}

export interface BoardColumn {
  readonly id: string;
  readonly name: string;
  readonly accent: string;
  readonly count: string;
  readonly cards: BoardTaskCard[];
  readonly faded?: boolean;
}
