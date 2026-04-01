export interface IssueDetailAttachment {
  readonly name: string;
  readonly type: 'pdf' | 'image';
  readonly size: string;
}

export interface IssueDetailSubtask {
  readonly label: string;
  readonly completed: boolean;
  readonly assignee?: string;
}

export interface IssueDetailComment {
  readonly author: string;
  readonly timeAgo: string;
  readonly message: string;
  readonly likes?: number;
}

export interface IssueDetail {
  readonly id: string;
  readonly status: string;
  readonly statusTone: 'progress' | 'todo' | 'done';
  readonly title: string;
  readonly workspace: string;
  readonly assignee: string;
  readonly priority: string;
  readonly dueDate: string;
  readonly project: string;
  readonly labels: readonly string[];
  readonly description: string;
  readonly codeRef: string;
  readonly attachments: readonly IssueDetailAttachment[];
  readonly subtasks: readonly IssueDetailSubtask[];
  readonly comments: readonly IssueDetailComment[];
}