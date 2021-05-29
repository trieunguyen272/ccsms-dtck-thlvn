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
    <Card style={{ width: "15rem", marginTop: "20px", height: "20rem" }}>
      <Card.Body>
        <Card.Img
          variant="top"
          src={product.imageUrl}
          style={{ height: "10rem" }}
        />
        <Card.Title name="name">{product.name}</Card.Title>
        <Card.Text name="price" style={{ marginTop: "-0.3rem" }}>
          <b style={{ fontWeight: "bold" }}>Đơn giá: </b> {product.price} VND
        </Card.Text>
        <Button variant="primary" onClick={handleToDetailClick}>
          <i class="fas fa-eye" style={{ marginRight: "10px" }}></i>
          Xem chi tiết
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
