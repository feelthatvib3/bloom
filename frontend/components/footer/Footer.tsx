'use client';

import type { FooterCategory as FooterCategoryType } from '@/app/lib/definitions';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Container from '@/components/Container';

import { footerItems } from '@/public/data/footer-items';

import FooterCategory from '@/components/footer/FooterCategory';

export default function Footer() {
	const currentPathname = usePathname();

	return (
		<footer
			className={
				currentPathname === '/' ? 'py-6 md:py-10 lg:py-14' : 'py-4 lg:py-8'
			}
		>
			<Container className="flex flex-col justify-between gap-y-8 sm:items-center md:flex-row md:items-start lg:gap-y-0">
				<Link href="/" className="font-heading text-3xl uppercase">
					Bloom
				</Link>
				<div className="flex flex-wrap gap-x-8 gap-y-8 sm:flex-row sm:justify-center sm:gap-x-14 md:gap-x-16">
					{footerItems.map((footerCategory: FooterCategoryType) => (
						<FooterCategory key={footerCategory.id} category={footerCategory} />
					))}
				</div>
			</Container>
		</footer>
	);
}
