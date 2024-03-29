'use client';

import type { Product, RootState } from '@/app/lib/definitions';

import ProductCard from '@/app/ui/ProductCard';

import { Skeleton } from '@/components/ui/skeleton';

import { useAppSelector } from '@/app/lib/redux-hooks';

export default function ProductList() {
	const { products, isLoading } = useAppSelector(
		(state: RootState) => state.products,
	);
	return (
		<ul className="grid gap-y-4 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 xl:grid-cols-4">
			{isLoading ? (
				Array(8)
					.fill(null)
					.map((_, index) => (
						<Skeleton
							key={index}
							className="h-[500px] w-full lg:h-[470px] lg:w-[300px]"
						/>
					))
			) : products.length === 0 ? (
				<p className="col-span-full text-center text-lg font-medium lg:text-start">
					No products found.
				</p>
			) : (
				products.map((product: Product) => (
					<ProductCard key={product.id} product={product} />
				))
			)}
		</ul>
	);
}
