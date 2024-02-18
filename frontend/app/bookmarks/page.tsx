'use client';

import Title from '@/components/Title';
import Container from '@/components/Container';
import BookmarksListItem from '@/components/bookmarks/BookmarksListItem';

import { useAppSelector } from '@/lib/redux-hooks';
import { RootState } from '@/store/store';

export default function BookmarksPage() {
	const { products } = useAppSelector((state: RootState) => state.bookmarks);

	if (products.length === 0) {
		return (
			<Container className="flex h-[75vh] items-center justify-center">
				<p className="text-2xl">
					No bookmarks here. Don't like to save things for later?
				</p>
			</Container>
		);
	}

	return (
		<Container className="pb-4 pt-[calc(1rem+69px)] lg:pb-8 lg:pt-[calc(2rem+69px)]">
			<Title>Bookmarks</Title>
			<ul className="mt-8 grid gap-y-4 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 xl:grid-cols-4">
				{products.map((product) => (
					<BookmarksListItem product={product} />
				))}
			</ul>
		</Container>
	);
}
