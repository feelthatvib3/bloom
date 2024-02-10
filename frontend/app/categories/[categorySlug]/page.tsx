'use client';

import { FC } from 'react';
import { useParams } from 'next/navigation';

import Container from '@/components/Container';

const CategoryProducts: FC = () => {
	const { categorySlug } = useParams();
	return (
		<main className="pt-[calc(1rem+74px)]">
			<Container>{categorySlug}</Container>
		</main>
	);
};

export default CategoryProducts;
