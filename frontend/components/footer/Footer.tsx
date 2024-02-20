import Link from 'next/link';

import Container from '@/components/Container';

import {
	type FooterCategory as FooterCategoryType,
	footerItems,
} from '@/public/data/footer-items';

import FooterCategory from '@/components/footer/FooterCategory';

export default function Footer() {
	return (
		<footer className="py-6 md:py-10 lg:py-14">
			<Container className="flex flex-col justify-between gap-y-8 sm:items-center md:flex-row md:items-start lg:gap-y-0">
				<Link href="/" className="font-heading text-3xl uppercase">
					Bloom
				</Link>
				<div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-16">
					{footerItems.map((footerCategory: FooterCategoryType) => (
						<FooterCategory key={footerCategory.id} category={footerCategory} />
					))}
				</div>
			</Container>
		</footer>
	);
}
