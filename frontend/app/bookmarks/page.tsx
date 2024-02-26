'use client';

import type { RootState } from '@/app/lib/definitions';

import BookmarksListItem from '@/app/bookmarks/components/BookmarksListItem';

import Title from '@/app/ui/Title';
import Container from '@/app/ui/Container';

import { useAppSelector } from '@/app/lib/redux-hooks';

export default function BookmarksPage() {
	const { products } = useAppSelector((state: RootState) => state.bookmarks);
	const reversedProducts = [...products].reverse();

	if (products.length === 0) {
		return (
			<Container className="flex h-[75vh] items-center justify-center">
				<p className="text-center text-2xl">
					No bookmarks here. Don&apos;t like saving things for later?
				</p>
			</Container>
		);
	}

	return (
		<Container className="pb-4 pt-[calc(1rem+69px)] lg:pb-8 lg:pt-[calc(2rem+69px)]">
			<Title>Bookmarks</Title>
			<ul className="mt-8 grid gap-y-4 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 xl:grid-cols-4">
				{reversedProducts.map((product) => (
					<BookmarksListItem key={product.id} product={product} />
				))}
			</ul>
		</Container>
	);
}
