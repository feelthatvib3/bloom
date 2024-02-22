import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.post('/new', (req: Request, res: Response) => {
	const order = req.body;
	res.status(200).json({ message: 'Order submitted', order });
});

export default router;
