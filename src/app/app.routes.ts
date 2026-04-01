import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'dashboard'
	},
	{
		path: 'dashboard',
		loadComponent: async () =>
			(await import('./features/dashboard/dashboard-page.component')).DashboardPageComponent
	},
	{
		path: 'board',
		loadComponent: async () =>
			(await import('./features/board/board-page.component')).BoardPageComponent
	},
	{
		path: 'issues',
		loadComponent: async () =>
			(await import('./features/issues/issues-page.component')).IssuesPageComponent
	},
	{
		path: 'issues/:id/full',
		loadComponent: async () =>
			(await import('./features/issues/issue-full-detail-page.component')).IssueFullDetailPageComponent
	},
	{
		path: 'team',
		loadComponent: async () =>
			(await import('./features/team/team-management-page.component')).TeamManagementPageComponent
	},
	{
		path: 'register',
		loadComponent: async () =>
			(await import('./features/register/register-page.component')).RegisterPageComponent
	},
	{
		path: 'login',
		loadComponent: async () =>
			(await import('./features/login/login-page.component')).LoginPageComponent
	},
	{
		path: 'reset-password',
		loadComponent: async () =>
			(await import('./features/reset-password/reset-password-page.component')).ResetPasswordPageComponent
	}
];
