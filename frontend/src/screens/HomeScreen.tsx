import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard';
import products from '../products';

export const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
