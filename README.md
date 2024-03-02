## backend 
### Getting Started
First, install the dependencies:
```
npm install
# or
npm i
```
Then, rename the file `.env-example` to `.env`. Do not modify the name of **DATABASE_URL** environment variable or its value, othewise Prisma won't be able to connect to the database. After renaming `.env-example` to `.env` you can run the development server:
```
npm run dev
```
And you're all set up! Open [http://localhost:5555] with your browser or use postman to test it. If your `5555` port is in use and you decided to run the app on another one, then the `:5555` part has to be changed with the value you provided to `PORT` environment variable in the `.env` file.
### API Routes
#### GET
- `/categories/all` - list of all categories.
- `/products/all` - list of all products.
- `/products/:categorySlug` - products of specific category.
- `/product/:productId` - specific product.
#### POST
- `/order/new` - new order route.
- `/discount/new` - new discount route.
