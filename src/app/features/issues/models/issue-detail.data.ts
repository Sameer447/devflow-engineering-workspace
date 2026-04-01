import { IssueDetail } from './issue-detail.models';

const DEFAULT_DETAIL: Omit<IssueDetail, 'id' | 'title'> = {
  status: 'In Progress',
  statusTone: 'progress',
  workspace: 'Engineering Workspace',
  assignee: 'Sarah K.',
  priority: 'Urgent',
  dueDate: 'Tomorrow',
  project: 'Infrastructure',
  labels: ['Bug', 'High Priority'],
  description:
    'The WebSocket reconnection logic appears to be creating new event listeners on each retry without cleaning up the previous ones. This leads to a gradual increase in memory usage in the main thread during intermittent network instability.',
  codeRef: '/src/network/socket-manager.ts:142',
  attachments: [
    { name: 'memory_dump_v1.pdf', type: 'pdf', size: '1.2 MB' },
    { name: 'leak_graph.png', type: 'image', size: '450 KB' }
  ],
  subtasks: [
    { label: 'Isolate socket-manager unit test', completed: false, assignee: 'AK' },
    { label: 'Implement listener cleanup hook', completed: false },
    { label: 'Verify with performance profiler', completed: false }
  ],
  comments: [
    {
      author: 'Alex Rivera',
      timeAgo: '2 hours ago',
      message:
        'I\'ve noticed this also happens when the user manually toggles airplane mode. It triggers a burst of reconnection attempts.',
      likes: 2
    },
    {
      author: 'Sameer Shoukat',
      timeAgo: '15 mins ago',
      message:
        'Great catch. Once cleanup hooks are in place, let\'s verify memory snapshots under unstable network simulation.'
    }
  ]
};

const TITLES: Record<string, string> = {
  'DF-101': 'Implement Redis caching for user sessions',
  'DF-104': 'Refactor navigation layout for mobile responsiveness',
  'DF-108': 'Update internal documentation for CI/CD pipeline',
  'DF-112': 'API rate limiting for public endpoints',
  'DF-115': 'Dark mode color palette refinement'
};

export function getIssueDetailById(id: string): IssueDetail {
  return {
    ...DEFAULT_DETAIL,
    id,
    title: TITLES[id] ?? 'Issue details'
  };
}
