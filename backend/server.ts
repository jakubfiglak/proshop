import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import { products } from './data/products';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;

  // const product = products.find((p) => p._id === id);
  // if (!product) {
  //   return res.json(`No product found with the id of ${id}`);
  // }

  // res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
