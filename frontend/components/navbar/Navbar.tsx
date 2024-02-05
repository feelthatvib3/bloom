'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

import Logo from '@/components/Logo';
import Menu from '@/components/navbar/Menu';

const Navbar: FC = () => {
	const [isShown, setIsShown] = useState<boolean>(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > window.innerHeight
				? setIsShown(true)
				: setIsShown(false);
			console.log(window.innerHeight, window.scrollY);
			console.log(isShown);
		});
	});
	return (
		<nav
			className={`fixed w-full ${isShown ? 'opacity-1' : 'pointer-events-none opacity-0'} transition-opacity duration-300`}
		>
			<div className="relative z-50 mx-auto mt-4 w-[calc(100%-2rem)] max-w-[calc(1024px-2rem)] rounded-full border border-lime-900/10 bg-lime-900/20 backdrop-blur-xl">
				<div className="flex items-center justify-between p-2">
					<Link href="/">
						<Logo />
					</Link>
					<Menu />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
