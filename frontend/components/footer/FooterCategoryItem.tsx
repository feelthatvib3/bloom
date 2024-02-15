import Link from 'next/link';

import { FooterCategoryItem } from '@/public/data/footer-items';

interface FooterCategoryItemProps {
	item: FooterCategoryItem;
}

export default function FooterCategoryItem({ item }: FooterCategoryItemProps) {
	const { label, href } = item;
	return (
		<li className="mb-1 last:mb-0">
			<Link
				href={href}
				className="relative text-lg text-lime-950 after:absolute after:-bottom-1 after:left-0 after:block after:h-[1px] after:w-full after:bg-lime-950 after:opacity-0 after:transition-opacity hover:after:opacity-100"
			>
				{label}
			</Link>
		</li>
	);
}
