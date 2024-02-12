import express, { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router: Router = express.Router();
const prisma: PrismaClient = new PrismaClient();

router.get('/all', async (req: Request, res: Response) => {
	try {
		const products = await prisma.product.findMany();
		res.json(products);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

router.get('/:categorySlug', async (req: Request, res: Response) => {
	try {
		const { categorySlug } = req.params;

		const categoryWithProducts = await prisma.category.findUnique({
			where: { slug: categorySlug },
			include: { products: true },
		});

		if (!categoryWithProducts) {
			return res.status(404).json({ error: 'Category not found' });
		}

		res.json(categoryWithProducts);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
});

export default router;
