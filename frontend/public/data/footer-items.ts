import type { FooterCategory } from '@/app/lib/definitions';

export const footerItems: FooterCategory[] = [
	{
		id: 0,
		title: 'Service',
		items: [
			{
				id: 0,
				label: 'Contact',
				href: '#',
			},
			{
				id: 1,
				label: 'Order status',
				href: '#',
			},
			{
				id: 2,
				label: 'Complaints',
				href: '#',
			},
			{
				id: 3,
				label: 'Report an error',
				href: '#',
			},
		],
	},
	{
		id: 1,
		title: 'Shopping',
		items: [
			{
				id: 0,
				label: 'Expert guides',
				href: '#',
			},
			{
				id: 1,
				label: 'Manufacturers',
				href: '#',
			},
			{
				id: 2,
				label: 'Payment options',
				href: '#',
			},
			{
				id: 3,
				label: 'Partnership program',
				href: '#',
			},
		],
	},
	{
		id: 2,
		title: 'Legal',
		items: [
			{
				id: 0,
				label: 'Security',
				href: '#',
			},
			{
				id: 1,
				label: 'Regulations',
				href: '#',
			},
			{
				id: 2,
				label: 'Terms of use',
				href: '#',
			},
			{
				id: 3,
				label: 'Privacy policy',
				href: '#',
			},
		],
	},
];
