'use client';

import { useParams } from 'next/navigation';

import Container from '@/components/Container';

export default function CategoryProducts() {
	const { categorySlug } = useParams();
	return (
		<main className="pb-[9999px] pt-[calc(1rem+74px)]">
			<Container>{categorySlug}</Container>
		</main>
	);
}
