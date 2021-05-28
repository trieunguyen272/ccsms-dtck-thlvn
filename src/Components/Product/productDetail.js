import productApi from "../../services/productApi";
import orderApi from "../../services/orderApi";
import cartApi from "../../services/cartApi";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { MDBCol, MDBRow } from "mdbreact";

function ProductDetail() {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [count, setCount] = useState(1);
  const history = useHistory();

  const userData = JSON.parse(localStorage.getItem("userData"));

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

  const handleAddCartClick = async () => {
    if (userData && userData.access_token) {
      const userId = userData.user_id;

      if (
        localStorage.getItem("cartId") === undefined ||
        localStorage.getItem("cartId") === null
      ) {
        const responseCart = await cartApi.getByUserId(userId);

        // Nếu user chưa có trong bảng cart thì thêm user đó
        if (responseCart.length === 0) {
          const response = await cartApi.addCart(userId);
          localStorage.setItem("cartId", response.id);
        } else {
          const cartId = responseCart[0].id;
          localStorage.setItem("cartId", cartId);
        }
      }

      const cartId = localStorage.getItem("cartId");
      console.log("cart", cartId);
      await orderApi.addOrder(cartId, count, productDetail.id);
      // const productUrl = `/cart`;
      // history.push(productUrl);
    } else {
      history.push("/login");
    }
  };

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
