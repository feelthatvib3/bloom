import type { GetFilteredProductsArgs, SortingOption } from 'definitions';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getFilteredProducts({
	search,
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
					createdAt: 'desc',
				};
				break;
			}
			case 'oldest': {
				sorting = {
					createdAt: 'asc',
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

		const searchStringRegex = search ? new RegExp(search, 'i') : undefined;
		const query = {
			where: {
				price: priceFilter,
				discount: isDiscounted === 'true' ? { not: null } : undefined,
				name: searchStringRegex
					? { contains: searchStringRegex.source }
					: undefined,
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
