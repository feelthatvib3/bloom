import express, { Router, Request, Response } from 'express';

import getFilteredProducts, {
	type FilterOptions,
} from '@utils/get-filtered-products';

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
	try {
		const { fromPrice, toPrice, isDiscounted, sortBy } =
			req.query as FilterOptions;
		const { categorySlug } = req.params;

		const products = await getFilteredProducts({
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
		const { fromPrice, toPrice, isDiscounted, sortBy } =
			req.query as FilterOptions;
		const { categorySlug } = req.params;

		const products = await getFilteredProducts({
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
