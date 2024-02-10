import express, { Express } from 'express';
import cors from 'cors';
import 'dotenv/config';

import categoriesRouter from '@routes/categories';

const app: Express = express();
const { PORT } = process.env;

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(
	cors({
		origin: '*',
	}),
);

app.use('/categories', categoriesRouter);

app.listen(PORT, () => {
	console.log(`The server has started on port ${PORT}!`);
});
