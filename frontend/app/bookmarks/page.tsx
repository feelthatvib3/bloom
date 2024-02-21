'use client';

import Title from '@/components/Title';
import Container from '@/components/Container';
import BookmarksListItem from '@/components/bookmarks/BookmarksListItem';

import { RootState } from '@/store/store';
import { useAppSelector } from '@/lib/redux-hooks';

export default function BookmarksPage() {
	const { products } = useAppSelector((state: RootState) => state.bookmarks);
	const reversedProducts = [...products].reverse();

	if (products.length === 0) {
		return (
			<Container className="flex h-[75vh] items-center justify-center">
				<p className="text-center text-2xl">
					No bookmarks here. Don't like saving things for later?
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
