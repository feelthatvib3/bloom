'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import { useAppSelector } from '@/lib/redux-hooks';
import { RootState } from '@/store/store';

export default function BookmarksPage() {
	const { products } = useAppSelector((state: RootState) => state.bookmarks);

	if (products.length === 0) {
		return (
			<Container className="flex h-[62vh] items-center justify-center">
				<p className="text-xl">You have no bookmarks.</p>
			</Container>
		);
	}

	return (
		<Container className="pb-4 pt-[calc(1rem+69px)] lg:pb-8 lg:pt-[calc(2rem+69px)]">
			<Title>Bookmarks</Title>
			<ul>
				{products.map((product) => (
					<li>{product.name}</li>
				))}
			</ul>
		</Container>
	);
}
