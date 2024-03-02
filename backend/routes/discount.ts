import type { Router, Request, Response } from 'express';

import express from 'express';

const router: Router = express.Router();

router.post('/new', (req: Request, res: Response) => {
	res.status(200).json({ message: 'Request submitted' });
});

export default router;
