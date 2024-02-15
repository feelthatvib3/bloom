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
			<Container className="flex flex-col justify-between lg:flex-row">
				<Link href="/" className="font-heading text-3xl uppercase">
					Bloom
				</Link>
				<div className="flex flex-col lg:flex-row lg:gap-x-10">
					{footerItems.map((footerCategory: FooterCategoryType) => (
						<FooterCategory category={footerCategory} />
					))}
				</div>
			</Container>
		</footer>
	);
}
