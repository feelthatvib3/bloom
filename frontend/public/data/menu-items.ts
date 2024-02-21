export interface MenuItem {
	id: number;
	label: string;
	href: string;
}

export const menuItems: MenuItem[] = [
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
		label: 'Bookmarks',
		href: '/bookmarks',
	},
];
