import {
	CalendarRange,
	KanbanSquare,
	LayoutDashboard,
	Settings,
	Timer,
} from 'lucide-react';

import { DASHBOARD_PAGES } from '@/config/pages-url.config';

import type { IMenuItem } from './menu.interface';

export const MENU_ITEMS: IMenuItem[] = [
	{
		label: 'Статистика',
		icon: LayoutDashboard,
		href: DASHBOARD_PAGES.HOME,
	},
	{
		label: 'Задачи',
		icon: KanbanSquare,
		href: DASHBOARD_PAGES.TASKS,
	},
	{
		label: 'Pomodoro таймер',
		icon: Timer,
		href: DASHBOARD_PAGES.TIMER,
	},
	{
		label: 'Расписание',
		icon: CalendarRange,
		href: DASHBOARD_PAGES.TIME_BLOCKING,
	},
	{
		label: 'Настройки',
		icon: Settings,
		href: DASHBOARD_PAGES.SETTINGS,
	},
];
