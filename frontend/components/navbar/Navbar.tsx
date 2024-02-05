import { FC } from 'react';
import Link from 'next/link';

import Logo from '@/components/Logo';
import Menu from '@/components/navbar/Menu';

const Navbar: FC = () => {
	return (
		<nav className="fixed w-full">
			<div className="relative z-50 mx-auto mt-4 w-[calc(100%-2rem)] max-w-screen-xl rounded-full border border-lime-800/10 bg-lime-900/20 backdrop-blur-md">
				<div className="flex items-center justify-between p-3">
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
