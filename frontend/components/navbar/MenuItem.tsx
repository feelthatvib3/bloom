import { FC } from 'react';
import Link from 'next/link';

interface MenuItemProps {
	label: string;
	href: string;
	isScrolled: boolean;
}

const MenuItem: FC<MenuItemProps> = ({ label, href, isScrolled }) => {
	return (
		<li className={`${isScrolled ? 'text-lime-100' : 'text-lime-950'} `}>
			<Link
				href={href}
				className={`relative text-lg after:absolute after:-bottom-1 after:left-0 after:block after:h-[1px] after:w-full  after:opacity-0 after:transition-opacity hover:after:opacity-100 ${isScrolled ? 'after:bg-lime-100' : 'after:bg-lime-950'}`}
			>
				{label}
			</Link>
		</li>
	);
};

export default MenuItem;
