'use client';

import { useEffect } from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import ProductCard from '@/components/productCard/ProductCard';

import { RootState } from '@/store/store';
import {
	Product,
	fetchAllProducts,
	fetchProductsByCategorySlug,
} from '@/store/slices/products-slice';
import { useAppDispatch, useAppSelector } from '@/lib/redux-hooks';

type ProductsListProps =
	| {
			filterType: 'category';
			categorySlug: string;
	  }
	| { filterType: 'all' | 'sale' };

export default function ProductList({
	filterType,
	// @ts-ignore
	categorySlug,
}: ProductsListProps) {
	const { products, isLoading } = useAppSelector(
		(state: RootState) => state.products,
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		switch (filterType) {
			case 'all':
				dispatch(fetchAllProducts());
				break;
			case 'category':
				dispatch(fetchProductsByCategorySlug(categorySlug));
				break;
			default:
				break;
		}
	}, [dispatch]);
	return (
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
	);
}
