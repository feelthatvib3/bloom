export interface FooterCategory {
	title: string;
	items: FooterCategoryItem[];
}

export interface FooterCategoryItem {
	label: string;
	href: string;
}

export const footerItems: FooterCategory[] = [
	{
		title: 'Legal',
		items: [
			{
				label: 'Security',
				href: '#',
			},
			{
				label: 'Terms of Use',
				href: '#',
			},
			{
				label: 'Privacy Policy',
				href: '#',
			},
		],
	},
];
