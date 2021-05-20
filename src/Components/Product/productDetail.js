import productApi from "../../services/productApi";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { MDBCol, MDBRow } from "mdbreact";

function ProductDetail() {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getProductDetail = async () => {
      const response = await productApi.get(productId);
      setProductDetail(response);
      console.log(response);
    };
    getProductDetail();
  }, []);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : (prevCount = 0)));
  };

  const handleAddCartClick = () => {};

  return (
    <MDBRow>
      <MDBCol md="3">
        <Card
          style={{ width: "18rem", marginLeft: "12rem", marginTop: "40px" }}
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
            marginTop: "2rem",
          }}
        >
          Tên sản phẩm: {productDetail.name}
        </h4>
        <h4
          style={{
            fontSize: "1.3rem",
            fontFamily: "Times New Roman",
            marginTop: "0rem",
            marginLeft: "-3.2rem",
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
        <h4
          style={{
            fontSize: "1.3rem",
            fontFamily: "Times New Roman",
            marginTop: "0.7rem",
            marginLeft: "-6.7rem",
          }}
        >
          Số lượng:
        </h4>
        <Button
          style={{
            marginLeft: "1.5rem",
            marginTop: "-3rem",
            fontSize: "20px",
            width: "5px",
            height: "2rem",
            textAlign: "center",
            display: "inline-block",
            background: "white",
          }}
          onClick={handleDecrement}
        >
          -
        </Button>
        <h5
          style={{
            fontSize: "1.3rem",
            fontFamily: "Times New Roman",
            marginTop: "-3rem",
            marginLeft: "-3rem",
          }}
        >
          {count}
        </h5>
        <Button
          style={{
            marginLeft: "17rem",
            marginTop: "-4rem",
            fontSize: "20px",
            width: "5px",
            height: "2rem",
            textAlign: "center",
            display: "inline-block",
            background: "white",
          }}
          onClick={handleIncrement}
        >
          +
        </Button>
        {/* <Button onClick={() => setCount(0)}>Reset</Button> */}
        <Button
          variant="primary"
          style={{ marginLeft: "7.5rem", marginTop: "0.7rem" }}
          onClick={handleAddCartClick}
        >
          <i class="fas fa-cart-plus" style={{ marginRight: "10px" }}></i>
          Thêm vào giỏ hàng
        </Button>
      </MDBCol>
    </MDBRow>
  );
}
export default ProductDetail;
