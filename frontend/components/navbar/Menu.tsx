'use client';

import { FC } from 'react';

import MenuItem from '@/components/navbar/MenuItem';
import MenuDrawer from '@/components/navbar/MenuDrawer';

import CartButton from '@/components/navbar/CartButton';

import { type IMenuItem, menuItems } from '@/data/menu-items';
import { useMediaQuery } from '@/hooks/use-media-query';

interface MenuProps {
	isScrolled: boolean;
}

const Menu: FC<MenuProps> = ({ isScrolled }) => {
	const isDesktop = useMediaQuery('(min-width: 1024px)');

	if (isDesktop) {
		return (
			<div className="hidden lg:flex lg:gap-x-6">
				<ul className="flex items-center gap-x-6">
					{menuItems.map(({ id, label, href }: IMenuItem) => (
						<MenuItem
							key={id}
							label={label}
							href={href}
							isScrolled={isScrolled}
						/>
					))}
				</ul>
				<CartButton isScrolled={isScrolled} />
			</div>
		);
	}

	return <MenuDrawer />;
};

export default Menu;
