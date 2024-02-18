'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

import { Skeleton } from '@/components/ui/skeleton';

import Title from '@/components/Title';
import Container from '@/components/Container';
import ProductCard from '@/components/productCard/ProductCard';

import { RootState } from '@/store/store';
import {
	Product,
	fetchProductsByCategorySlug,
} from '@/store/slices/products-slice';
import { useAppDispatch, useAppSelector } from '@/lib/redux-hooks';
import { capitalize } from '@/lib/utils';

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
		<Container className="pb-4 pt-[calc(1rem+69px)] lg:pb-8 lg:pt-[calc(2rem+69px)]">
			<Title>{title}</Title>
			<ul className="mt-8 grid gap-y-4 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 xl:grid-cols-4">
				{isLoading
					? Array(8)
							.fill(null)
							.map((_, index) => (
								<Skeleton key={index} className="h-[470px] w-[300px]" />
							))
					: products.map((product: Product) => (
							<ProductCard key={product.id} product={product} />
						))}
			</ul>
		</Container>
	);
}
