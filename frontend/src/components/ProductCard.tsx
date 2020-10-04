import React from 'react';
import { Card } from 'react-bootstrap';
import { Rating } from './Rating';
import { Product } from '../types';

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const { _id, image, name, rating, numReviews, price } = product;

  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${_id}`}>
        <Card.Img src={image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${_id}`}>
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            <Rating value={rating} text={`${numReviews} reviews`} />
          </div>
        </Card.Text>
        <Card.Text as="h3">${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
