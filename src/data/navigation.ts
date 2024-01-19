interface NavigationLink {
    name: string;
    href: string;
}

export const navigationLinks: NavigationLink[] = [
    { name: 'Main Page', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'All products', href: '/products' },
    { name: 'All sales', href: '/sales' },
];
