import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

ProductCard.propTypes = {
  product: PropTypes.object,
  handleToDetailClick: PropTypes.func,
};

ProductCard.defaultProps = {
  product: {},
  handleToDetailClick: null,
};

function ProductCard(props) {
  const { product, onToDetailClick } = props;

  const handleToDetailClick = () => {
    if (onToDetailClick) onToDetailClick(product);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Img
          variant="top"
          src={product.imageUrl}
          style={{ height: "15rem" }}
        />
        <Card.Title name="name">{product.name}</Card.Title>
        <Card.Text name="price">Đơn giá:{product.price}</Card.Text>
        <Card.Text name="quantity">Số lượng: {product.quantity}</Card.Text>
        <Button variant="primary" onClick={handleToDetailClick}>
          <i class="fas fa-eye"></i>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
