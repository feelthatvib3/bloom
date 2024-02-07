'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

import Logo from '@/components/Logo';
import Menu from '@/components/navbar/Menu';
import Container from '@/components/Container';

const Navbar: FC = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 20 ? setIsScrolled(true) : setIsScrolled(false);
		});
	}, [window.scrollY]);
	return (
		// <nav
		// 	className={`fixed w-full ${isShown ? 'opacity-1' : 'pointer-events-none opacity-0'} transition-opacity duration-300`}
		// >
		<nav
			className={`fixed z-50  w-full transition-opacity duration-300 ${isScrolled ? 'bg-lime-950' : 'bg-transparent'} transition-all`}
		>
			<Container>
				<div
					className={`flex items-center justify-between ${isScrolled ? 'py-4' : 'py-4'}`}
				>
					<Link
						href="/"
						className="font-heading text-3xl uppercase text-lime-200"
					>
						Bloom
					</Link>
					<Menu />
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
