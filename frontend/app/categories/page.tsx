'use client';

import type { Category, RootState } from '@/app/lib/definitions';

import { useEffect } from 'react';

import Title from '@/components/Title';
import Container from '@/app/ui/Container';
import CategoriesListItem from '@/app/categories/components/CategoriesListItem';

import { Skeleton } from '@/components/ui/skeleton';

import { useAppDispatch, useAppSelector } from '@/app/lib/redux-hooks';
import { fetchCategories } from '@/store/thunks/categories-thunks';

export default function CategoriesPage() {
	const { categories, isLoading } = useAppSelector(
		(state: RootState) => state.categories,
	);
	const dispatch = useAppDispatch();

	const skeletonItems = Array(5).fill(null);

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);
	return (
		<Container className="pb-4 pt-[calc(1rem+69px)] lg:pb-8 lg:pt-[calc(2rem+69px)]">
			<Title className="mb-4 lg:mb-6 xl:mb-8">Your garden essentials</Title>
			<ul className="grid grid-cols-1 gap-2 md:grid-cols-5">
				{isLoading
					? skeletonItems.map((_, index) => (
							<Skeleton
								key={index}
								className="categories-list-item h-[180px]"
							/>
						))
					: categories.map((category: Category) => (
							<CategoriesListItem key={category.id} category={category} />
						))}
			</ul>
		</Container>
	);
}
