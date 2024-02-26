'use client';

import type { MenuItem as MenuItemType } from '@/app/lib/definitions';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

import Container from '@/app/ui/Container';
import IconButton from '@/app/ui/IconButton';
import MenuItem from '@/components/layout/navbar/MenuItem';
import MenuDrawer from '@/components/layout/navbar/MenuDrawer';

import { menuItems } from '@/public/data/menu-items';
import Logo from '@/app/ui/Logo';

export default function Navbar() {
	const router = useRouter();
	const currentPathname = usePathname();
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isScrolled]);
	return (
		<nav
			className={`${isScrolled ? 'bg-lime-950/90 backdrop-blur-xl' : 'bg-transparent'} fixed z-50 w-full  transition-colors duration-300`}
		>
			<Container>
				<div className="flex items-center justify-between py-3">
					<Logo
						className={
							currentPathname !== '/' && !isScrolled
								? 'text-lime-950'
								: 'text-lime-200'
						}
					/>
					<div>
						<div className="lg:hidden">
							<MenuDrawer
								currentPathname={currentPathname}
								isScrolled={isScrolled}
							/>
						</div>
						<div className="hidden lg:flex lg:gap-x-6">
							<ul className="flex items-center gap-x-6">
								{menuItems.map(({ id, label, href }: MenuItemType) => (
									<MenuItem
										key={id}
										label={label}
										href={href}
										isScrolled={isScrolled}
									/>
								))}
							</ul>
							<IconButton
								onClick={() => router.push('/cart')}
								icon={<ShoppingCartIcon className={`h-6 w-6`} />}
								className={`${isScrolled ? 'border-lime-200 bg-lime-200 text-lime-950 hover:text-lime-200' : 'border-lime-950 bg-lime-950 text-lime-200 hover:text-lime-950'} border transition-colors hover:bg-transparent`}
							/>
						</div>
					</div>
				</div>
			</Container>
		</nav>
	);
}
