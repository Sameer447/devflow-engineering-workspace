import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DashboardSidebarComponent } from '../dashboard/components/dashboard-sidebar.component';
import { DashboardNavItem } from '../dashboard/models/dashboard.models';
import { getIssueDetailById } from './models/issue-detail.data';

@Component({
  selector: 'app-issue-full-detail-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DashboardSidebarComponent, RouterLink],
  templateUrl: './issue-full-detail-page.component.html',
  styleUrl: './issue-full-detail-page.component.scss'
})
export class IssueFullDetailPageComponent {
  private readonly route = inject(ActivatedRoute);

  protected readonly navItems: readonly DashboardNavItem[] = [
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { icon: 'list_alt', label: 'Issues', route: '/issues' },
    { icon: 'view_kanban', label: 'Board', route: '/board' },
    { icon: 'speed', label: 'Sprint' },
    { icon: 'assessment', label: 'Reports' },
    { icon: 'group', label: 'Team', route: '/team' }
  ];

  protected readonly issueId = computed(() => this.route.snapshot.paramMap.get('id') ?? 'DF-101');
  protected readonly detail = computed(() => getIssueDetailById(this.issueId()));
}
