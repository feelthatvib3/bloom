import { LiHTMLAttributes } from 'react';
import Link from 'next/link';

interface MenuItemProps extends LiHTMLAttributes<HTMLElement> {
	label: string;
	href: string;
	isScrolled?: boolean;
}

export default function MenuItem({
	label,
	href,
	isScrolled,
	...props
}: MenuItemProps) {
	return (
		<li
			{...props}
			className="border-b border-b-lime-100/25 py-2 lg:border-none lg:py-0"
		>
			<Link
				href={href}
				className={`${isScrolled ? 'lg:text-lime-100 lg:after:bg-lime-100' : 'lg:text-lime-950 lg:after:bg-lime-950'} text-lg font-medium uppercase text-lime-100 lg:relative lg:font-normal lg:normal-case lg:after:absolute lg:after:-bottom-1 lg:after:left-0 lg:after:block lg:after:h-[1px] lg:after:w-full lg:after:opacity-0 lg:after:transition-opacity lg:hover:after:opacity-100`}
			>
				{label}
			</Link>
		</li>
	);
}
