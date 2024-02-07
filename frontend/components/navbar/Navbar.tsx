'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

import Menu from '@/components/navbar/Menu';
import Container from '@/components/Container';

const Navbar: FC = () => {
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
						className="font-heading text-3xl uppercase text-lime-200"
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
