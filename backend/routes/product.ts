import type { Router, Request, Response } from 'express';

import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma: PrismaClient = new PrismaClient();
const router: Router = express.Router();

router.get('/:productId', async (req: Request, res: Response) => {
	try {
		const { productId } = req.params;

		const product = await prisma.product.findUnique({
			where: {
				id: productId,
			},
		});

		res.status(200).json(product);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
});

export default router;
