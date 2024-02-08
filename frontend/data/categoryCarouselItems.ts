export interface ICategoriesCarouselItem {
	id: number;
	categoryTitle: string;
	imageSrc: string;
	imageDescription: string;
}

export const categoriesCarouselItems: ICategoriesCarouselItem[] = [
	{
		id: 0,
		categoryTitle: 'Tools and Equipment',
		imageSrc: '/images/categories-carousel/carousel-item-0.jpg',
		imageDescription: 'Green leaves beside brown wooden rolling pin',
	},
	{
		id: 1,
		categoryTitle: 'Outdoor Furniture',
		imageSrc: '/images/categories-carousel/carousel-item-1.jpg',
		imageDescription: 'Brown wooden table and chairs',
	},
	{
		id: 2,
		categoryTitle: 'Seeds and Bulbs',
		imageSrc: '/images/categories-carousel/carousel-item-2.jpg',
		imageDescription: "Green plant sprouts in person's hand",
	},
	{
		id: 3,
		categoryTitle: 'Planters and Pots',
		imageSrc: '/images/categories-carousel/carousel-item-3.jpg',
		imageDescription: 'A black and a white vase with a green leaf on top of it',
	},
];
