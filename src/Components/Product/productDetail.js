import productApi from "../../services/productApi";
import { Card, Button, Carousel, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

function ProductDetail() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getProductList = async () => {
      const response = await productApi.get();
      setProductList(response);
      console.log(response);
    };
    getProductList();
  }, []);
  return (
    // <Card style={{ width: "18rem" }}>
    //   <Card.Body>
    //     <Card.Img variant="top" src={item.imageUrl} />
    //     <Card.Title name="name">{item.name}</Card.Title>
    //     <Card.Text name="price">Đơn giá:{item.price}</Card.Text>
    //     <Card.Text name="quantity">Số lượng: {item.quantity}</Card.Text>
    //   </Card.Body>
    // </Card>
    <div></div>
  );
}
export default ProductDetail;
