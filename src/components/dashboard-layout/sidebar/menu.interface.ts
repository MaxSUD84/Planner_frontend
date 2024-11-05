import type { LucideIcon } from 'lucide-react';

export interface IMenuItem {
	label: string;
	icon: LucideIcon;
	href: string;
	children?: IMenuItem[];
}
