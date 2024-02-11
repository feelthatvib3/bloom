'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Container from '@/components/Container';
import MenuItem from '@/components/navbar/MenuItem';
import MenuDrawer from '@/components/navbar/MenuDrawer';
import CartButton from '@/components/navbar/CartButton';

import { IMenuItem, menuItems } from '@/data/menu-items';

export default function Navbar() {
	const currentPathname = usePathname();
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<nav
			className={`${isScrolled ? 'bg-lime-950/90' : 'bg-transparent'} fixed z-50 w-full backdrop-blur-md transition-colors duration-300`}
		>
			<Container>
				<div className="flex items-center justify-between py-3">
					<Link
						href="/"
						className={`${currentPathname !== '/' && !isScrolled ? 'text-lime-950' : 'text-lime-100'} font-heading text-3xl uppercase`}
					>
						Bloom
					</Link>
					<div>
						<div className="pt-[6px] lg:hidden">
							<MenuDrawer isScrolled={isScrolled} />
						</div>
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
					</div>
				</div>
			</Container>
		</nav>
	);
}
