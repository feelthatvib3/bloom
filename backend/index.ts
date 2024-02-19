import express, { Express } from 'express';
import cors from 'cors';
import 'dotenv/config';

import discountRouter from '@routes/discount';
import productsRouter from '@routes/products';
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
app.use('/products', productsRouter);
app.use('/discount', discountRouter);

app.listen(PORT, () => {
	console.log(`The server has started on port ${PORT}!`);
});
