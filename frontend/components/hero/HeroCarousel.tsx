'use client';

import { FC, useEffect, useState } from 'react';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';

import CarouselSlidesCounter from '@/components/hero/CarouselSlidesCounter';

import {
	type IHeroCarouselItem,
	heroCarouselItems,
} from '@/data/heroCarouselItems';

const HeroCarousel: FC = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState<number>(0);
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);
	return (
		<>
			<Carousel setApi={setApi} className="h-[320px] md:h-[640px] xl:h-[800px]">
				<CarouselContent className="h-full p-0">
					{heroCarouselItems.map(
						({ id, imageSrc, imageDescription }: IHeroCarouselItem) => (
							<CarouselItem key={id} className="">
								<img
									src={imageSrc}
									alt={imageDescription}
									className="h-full w-full object-cover"
								/>
							</CarouselItem>
						),
					)}
				</CarouselContent>
				<div className="absolute bottom-0 left-0 flex">
					<CarouselPrevious className="static h-10 w-10 translate-y-0 rounded-none border-none bg-lime-100 hover:bg-lime-200 xl:h-14 xl:w-14" />
					<CarouselNext className="static h-10 w-10 translate-y-0 rounded-none border-none bg-lime-100 hover:bg-lime-200 xl:h-14 xl:w-14" />
				</div>
			</Carousel>
			<div className="mt-2">
				<CarouselSlidesCounter
					currentSlideIndex={current}
					totalSlides={count}
				/>
			</div>
		</>
	);
};

export default HeroCarousel;
