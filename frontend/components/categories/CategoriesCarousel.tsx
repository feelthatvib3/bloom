import { FC, useEffect } from 'react';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';

import { useAppDispatch, useAppSelector } from '@/lib/redux-hooks';
import { Category, fetchCategories } from '@/store/slices/categoriesSlice';
import { ROOT_URL, RootState } from '@/store/store';

const CategoryCarousel: FC = () => {
	const { categories } = useAppSelector((state: RootState) => state.categories);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);
	return (
		<Carousel opts={{ align: 'start' }}>
			<CarouselContent>
				{categories.map(({ id, title, image }: Category) => (
					<CarouselItem
						key={id}
						className="relative max-h-[300px] max-w-64 md:max-h-96 md:max-w-80"
					>
						<img
							src={ROOT_URL + image}
							alt={title}
							className="h-full w-full object-cover"
							loading="lazy"
						/>
						<div className="absolute bottom-0 left-4 h-1/5 w-[calc(100%-1rem)] bg-gradient-to-t from-lime-100 via-lime-100/90 to-lime-100/80 p-4 text-xl font-bold text-lime-950 md:text-2xl">
							{title}
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default CategoryCarousel;
