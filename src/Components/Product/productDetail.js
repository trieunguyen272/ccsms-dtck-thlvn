import productApi from "../../services/productApi";
// import { Card, Button, Carousel, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

function ProductDetail() {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    const getProductDetail = async () => {
      const response = await productApi.get(productId);
      setProductDetail(response);
      console.log(response);
    };
    getProductDetail();
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={productDetail.imageUrl} />
          <Card.Title name="name">{productDetail.name}</Card.Title>
          <Card.Text name="price">Đơn giá:{productDetail.price}</Card.Text>
          <Card.Text name="quantity">
            Số lượng: {productDetail.quantity}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ProductDetail;
