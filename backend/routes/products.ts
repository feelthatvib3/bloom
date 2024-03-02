import type { FilterOptions } from 'definitions';
import type { Router, Request, Response } from 'express';

import express from 'express';

import getFilteredProducts from '@lib/get-filtered-products';

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
	try {
		const { search, fromPrice, toPrice, isDiscounted, sortBy } =
			req.query as FilterOptions;
		const { categorySlug } = req.params;

		const products = await getFilteredProducts({
			search,
			fromPrice,
			toPrice,
			isDiscounted,
			sortBy,
			categorySlug,
		});

		if (products.length === 0) {
			return res.status(404).json({ error: 'No products found' });
		}

		res.status(200).json(products);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

router.get('/:categorySlug', async (req: Request, res: Response) => {
	try {
		const { search, fromPrice, toPrice, isDiscounted, sortBy } =
			req.query as FilterOptions;
		const { categorySlug } = req.params;

		const products = await getFilteredProducts({
			search,
			fromPrice,
			toPrice,
			isDiscounted,
			sortBy,
			categorySlug,
		});

		if (products.length === 0) {
			return res.status(404).json({ error: 'No products found' });
		}

		res.status(200).json(products);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
});

export default router;
