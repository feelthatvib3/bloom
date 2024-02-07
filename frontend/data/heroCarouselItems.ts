export interface HeroCarouselItem {
	id: number;
	imageSrc: string;
	imageDescription: string;
}

export const heroCarouselItems: HeroCarouselItem[] = [
	{
		id: 0,
		imageSrc: '/images/carousel-item-0.jpg',
		imageDescription: 'Green leaves and blue and white checkered container',
	},
	{
		id: 1,
		imageSrc: '/images/carousel-item-1.jpg',
		imageDescription: 'Green leaves beside brown wooden rolling pin',
	},
];
