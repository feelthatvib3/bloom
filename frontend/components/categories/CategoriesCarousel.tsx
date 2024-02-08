import { FC, useEffect, useState } from 'react';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';

import {
	type ICategoriesCarouselItem,
	categoriesCarouselItems,
} from '@/data/categoryCarouselItems';

const CategoryCarousel: FC = () => {
	return (
		<Carousel opts={{ align: 'start' }}>
			<CarouselContent>
				{categoriesCarouselItems.map(
					({
						id,
						categoryTitle,
						imageSrc,
						imageDescription,
					}: ICategoriesCarouselItem) => (
						<CarouselItem
							key={id}
							className="relative max-h-[300px] max-w-64 md:max-h-96 md:max-w-80"
						>
							<img
								src={imageSrc}
								alt={imageDescription}
								className="h-full w-full object-cover"
								loading="lazy"
							/>
							<div className="absolute bottom-0 left-4 h-1/5 w-[calc(100%-1rem)] bg-gradient-to-t from-lime-100 via-lime-100/90 to-lime-100/80 p-4 text-xl font-bold text-lime-950 md:text-2xl">
								{categoryTitle}
							</div>
						</CarouselItem>
					),
				)}
			</CarouselContent>
		</Carousel>
	);
};

export default CategoryCarousel;
