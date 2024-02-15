'use client';

import { useParams } from 'next/navigation';

import Title from '@/components/Title';
import Container from '@/components/Container';

import { capitalize } from '@/lib/utils';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/redux-hooks';
import { RootState } from '@/store/store';
import {
	Product,
	fetchProductsByCategorySlug,
} from '@/store/slices/products-slice';
import { Skeleton } from '@/components/ui/skeleton';

export default function CategoryProducts() {
	const dispatch = useAppDispatch();
	const { products, isLoading } = useAppSelector(
		(state: RootState) => state.products,
	);
	const { categorySlug } = useParams();
	useEffect(() => {
		dispatch(
			fetchProductsByCategorySlug(
				(!Array.isArray(categorySlug) && categorySlug) || '',
			),
		);
	}, [dispatch]);
	const title = !Array.isArray(categorySlug) && capitalize(categorySlug);
	return (
		<main className="py-[calc(1rem+69px)] lg:py-[calc(2rem+69px)]">
			<Container>
				<Title>{title}</Title>
				<ul className="grid">
					{isLoading
						? Array(5)
								.fill(null)
								.map((_, index) => (
									<Skeleton key={index} className="h-[350px] w-[200px]" />
								))
						: products.map(({ name }: Product) => <li>{name}</li>)}
				</ul>
			</Container>
		</main>
	);
}
