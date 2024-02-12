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
	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);
	return (
		<main className="py-[calc(1rem+69px)] lg:py-[calc(2rem+69px)]">
			<Container>
				<Title text="Your garden essentials" className="mb-4 lg:mb-6 xl:mb-8" />
				<ul className="grid grid-cols-1 gap-2 md:grid-cols-5">
					{isLoading
						? Array(5)
								.fill(null)
								.map(() => (
									<Skeleton className="categories-list-item h-[250px]" />
								))
						: categories.map((category: Category) => (
								<CategoriesListItem category={category} />
							))}
				</ul>
			</Container>
		</main>
	);
}
