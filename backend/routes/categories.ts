import express, { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router: Router = express.Router();
const prisma: PrismaClient = new PrismaClient();

router.get('/all', async (req: Request, res: Response) => {
	try {
		const categories = await prisma.category.findMany({
			include: { products: false },
		});

		res.json(categories);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

export default router;
