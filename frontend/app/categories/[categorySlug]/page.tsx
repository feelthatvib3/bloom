'use client';

import { useParams } from 'next/navigation';

import Title from '@/components/Title';
import Container from '@/components/Container';
import ProductList from '@/components/ProductsList';

import { capitalize } from '@/lib/utils';

export default function CategoryProducts() {
	const { categorySlug } = useParams();
	const slug = (!Array.isArray(categorySlug) && categorySlug) || '';
	const title = !Array.isArray(categorySlug) && capitalize(categorySlug);
	return (
		<Container className="pb-4 pt-[calc(1rem+69px)] lg:pb-8 lg:pt-[calc(2rem+69px)]">
			<Title>{title}</Title>
			<ProductList filterType="category" categorySlug={slug} />
		</Container>
	);
}
