import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.post('/new', (req: Request, res: Response) => {
	res.status(200).json({ message: 'Request submitted' });
});

export default router;
