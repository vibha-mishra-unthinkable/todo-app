import React from "react";
import "../../assets/styles/ViewCart.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useState } from "react";
const ProductCard = (props) => {
  const { item } = props;
  const [cartProducts, setCartProducts] = useState([]);
  const [productStatus, setProductStatus] = useState(false);
  const addToCartHandler = (item) => {
    setCartProducts([...cartProducts, item]);
    setProductStatus(!productStatus);
  };
  return (
    <>
      <Col key={item.id}>
        <Card className="card">
          <Card.Img variant="top" src={item.img} className="cardImg" />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Price :{item.price}</Card.Text>
            {productStatus ? (
              <Button variant="success">Added</Button>
            ) : (
              <Button variant="primary" onClick={() => addToCartHandler(item)}>
                Add to Cart
              </Button>
            )}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
