interface INavigationLink {
    name: string;
    href: string;
}

export const navigationLinks: INavigationLink[] = [
    { name: 'Main Page', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'All products', href: '/products' },
    { name: 'All sales', href: '/sales' },
];
