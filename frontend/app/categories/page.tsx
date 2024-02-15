'use client';

import { useEffect } from 'react';

import Title from '@/components/Title';
import Container from '@/components/Container';
import { Skeleton } from '@/components/ui/skeleton';
import CategoriesListItem from '@/components/categories/CategoriesListItem';

import { RootState } from '@/store/store';
import { Category, fetchCategories } from '@/store/slices/categories-slice';
import { useAppDispatch, useAppSelector } from '@/lib/redux-hooks';

export default function CategoriesPage() {
	const dispatch = useAppDispatch();
	const { categories, isLoading } = useAppSelector(
		(state: RootState) => state.categories,
	);
	const skeletonItems = Array(5).fill(null);
	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);
	return (
		<main className="pb-4 pt-[calc(1rem+69px)] lg:pb-8 lg:pt-[calc(2rem+69px)]">
			<Container>
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
		</main>
	);
}
