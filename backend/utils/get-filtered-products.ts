import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type FilterOptions = {
	fromPrice: string;
	toPrice: string;
	isDiscounted: string;
	sortBy: 'newest' | 'oldest' | 'alphabetical' | 'reverseAlphabetical';
};

interface GetFilteredProductsArgs extends FilterOptions {
	categorySlug?: string;
}

type SortingOption = {
	createdAt?: 'asc' | 'desc';
	name?: 'asc' | 'desc';
};

export default async function getFilteredProducts({
	fromPrice,
	toPrice,
	isDiscounted,
	sortBy,
	categorySlug,
}: GetFilteredProductsArgs) {
	try {
		const priceFilter: any = {};
		if (!isNaN(parseFloat(fromPrice))) {
			priceFilter.gte = parseFloat(fromPrice);
		}
		if (!isNaN(parseFloat(toPrice))) {
			priceFilter.lte = parseFloat(toPrice);
		}

		let sorting: SortingOption;
		switch (sortBy) {
			case 'newest': {
				sorting = {
					createdAt: 'asc',
				};
				break;
			}
			case 'oldest': {
				sorting = {
					createdAt: 'desc',
				};
				break;
			}
			case 'alphabetical': {
				sorting = {
					name: 'asc',
				};
				break;
			}
			case 'reverseAlphabetical': {
				sorting = {
					name: 'desc',
				};
				break;
			}
		}

		const query = {
			where: {
				price: priceFilter,
				discount: isDiscounted === 'true' ? { not: null } : undefined,
			},
			orderBy: sorting,
		};

		let filteredProducts;

		if (categorySlug) {
			filteredProducts = await prisma.product.findMany({
				...query,
				where: {
					...query.where,
					category: {
						slug: categorySlug,
					},
				},
			});
		} else {
			filteredProducts = await prisma.product.findMany(query);
		}

		return filteredProducts;
	} catch (error) {
		console.error('Error fetching products', error);
		throw new Error('Internal server error');
	}
}
