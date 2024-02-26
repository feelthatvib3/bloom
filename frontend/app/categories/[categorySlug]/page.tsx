'use client';
import { useParams } from 'next/navigation';

import { ROOT_URL } from '@/app/lib/constants';

import Title from '@/components/Title';
import Container from '@/components/Container';
import ProductList from '@/components/ProductsList';
import ProductsFilter from '@/components/ProductsFilter';

import { capitalize } from '@/lib/utils';

export default function CategoryProductsPage() {
	const { categorySlug } = useParams();
	const endpoint = `${ROOT_URL}/products/${categorySlug}`;
	const title = !Array.isArray(categorySlug) && capitalize(categorySlug);
	return (
		<Container className="pb-4 pt-[calc(1rem+69px)] lg:pb-8 lg:pt-[calc(2rem+69px)]">
			<Title>{title}</Title>
			<div className="mb-8 mt-6">
				<ProductsFilter endpoint={endpoint} />
			</div>
			<ProductList />
		</Container>
	);
}
