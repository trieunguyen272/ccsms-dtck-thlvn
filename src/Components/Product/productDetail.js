import productApi from "../../services/productApi";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { MDBCol, MDBRow } from "mdbreact";

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
    <MDBRow>
      <MDBCol md="3">
        <Card
          style={{ width: "18rem", marginLeft: "12rem", marginTop: "20px" }}
        >
          <Card.Body>
            <Card.Img variant="top" src={productDetail.imageUrl} />
          </Card.Body>
        </Card>
      </MDBCol>
      <MDBCol md="6">
        <h4
          style={{
            fontSize: "1.3rem",
            fontFamily: "Times New Roman",
            marginTop: "4rem",
          }}
        >
          Tên sản phẩm: {productDetail.name}
        </h4>
        <h4
          style={{
            fontSize: "1.3rem",
            fontFamily: "Times New Roman",
            marginTop: "0rem",
            marginLeft: "-3.5rem",
          }}
        >
          Đơn giá: {productDetail.price} VND
        </h4>
        <h4
          style={{
            fontSize: "1.3rem",
            fontFamily: "Times New Roman",
            marginTop: "0rem",
            marginLeft: "3.1rem",
          }}
        >
          Mô tả: {productDetail.description}
        </h4>
        <Button
          variant="primary"
          style={{ marginLeft: "7.5rem", marginTop: "0.7rem" }}
        >
          <i class="fas fa-cart-plus" style={{ marginRight: "10px" }}></i>
          Thêm vào giỏ hàng
        </Button>
      </MDBCol>
    </MDBRow>
  );
}
export default ProductDetail;
