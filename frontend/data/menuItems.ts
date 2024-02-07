export interface IMenuItem {
	id: number;
	label: string;
	href: string;
}

export const menuItems: IMenuItem[] = [
	{
		id: 0,
		label: 'Categories',
		href: '/categories',
	},
	{
		id: 1,
		label: 'Products',
		href: '/products',
	},
	{
		id: 2,
		label: 'Sale',
		href: '/sale',
	},
];
