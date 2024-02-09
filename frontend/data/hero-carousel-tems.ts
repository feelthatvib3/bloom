export interface IHeroCarouselItem {
	id: number;
	imageSrc: string;
	imageDescription: string;
}

export const heroCarouselItems: IHeroCarouselItem[] = [
	{
		id: 0,
		imageSrc: '/images/carousel-item-0.jpg',
		imageDescription: 'Green-leafed potted plants during daytime photo',
	},
	{
		id: 1,
		imageSrc: '/images/carousel-item-1.jpg',
		imageDescription: 'Person holding plant',
	},
];
