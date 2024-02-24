export interface HeroCarouselItem {
	id: number;
	imageSrc: string;
	imageDescription: string;
}

export const heroCarouselItems: HeroCarouselItem[] = [
	{
		id: 0,
		imageSrc: '/images/carousel-item-0.jpg',
		imageDescription: 'A person in front of green plants',
	},
	{
		id: 1,
		imageSrc: '/images/carousel-item-1.jpg',
		imageDescription: 'Pink petaled flowers inside building',
	},
];
