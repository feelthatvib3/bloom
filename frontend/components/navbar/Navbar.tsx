'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Menu from '@/components/navbar/Menu';
import Container from '@/components/Container';

const Navbar: FC = () => {
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
			className={`fixed z-50 w-full duration-300 ${isScrolled ? 'bg-lime-950' : 'bg-transparent'} transition-colors`}
		>
			<Container>
				<div className="flex items-center justify-between py-3">
					<Link
						href="/"
						className={`${currentPathname !== '/' && !isScrolled ? 'text-lime-950' : 'text-lime-100'} font-heading text-3xl uppercase`}
					>
						Bloom
					</Link>
					<Menu isScrolled={isScrolled} />
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
