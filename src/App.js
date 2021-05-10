import React, { useState, useEffect } from "react";
import Header from "./Components/Header/header";
import Navbarmenu from "./Components/Nav/nav";
import Footer from "./Components/Footer/footer";
import { BrowserRouter as Router } from "react-router-dom";
import banner1 from "./public/image/banner_1.jpg";
import banner2 from "./public/image/banner_2.jpg";
import banner3 from "./public/image/banner_3.jpg";
import banner4 from "./public/image/banner_4.png";
import banner5 from "./public/image/banner_5.jpg";
import banner6 from "./public/image/banner_6.jpg";
import banner7 from "./public/image/banner_7.jpg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import productApi from "./services/productApi";
import { Card, Button, Carousel, Row, Col } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getAllProductList = async () => {
      const response = await productApi.getAll();
      setProductList(response);
      console.log(response);
    };

    getAllProductList();
  }, []);

  const showDetail = (product) => {
    const detailUrl = `/product-detail/${product.id}`;
    return <Redirect to={detailUrl} />;
    // history.push(detailUrl);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbarmenu />
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="First slide" />
            <Carousel.Caption>
              <h4>RAM</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner2} alt="Second slide" />
            <Carousel.Caption>
              <h3>SSD</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner3} alt="Third slide" />
            <Carousel.Caption>
              <h4>USB</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner4} alt="Fourth slide" />
            <Carousel.Caption>
              <h4>THẺ NHỚ</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner5} alt="Fiveth slide" />
            <Carousel.Caption>
              <h3>THIẾT BỊ LƯU TRỮ MẠNG NAS</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner6} alt="Sixth slide" />
            <Carousel.Caption>
              <h4>HDD</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner7} alt="Seventh slide" />
            <Carousel.Caption>
              <h4>CANDY BAY</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row>
          {productList.map((item) => (
            <Col key={item.id} lg="3">
              {/* hiểu col của bootstrap mà đúng k ok */}
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={item.imageUrl}
                    style={{ height: "15rem" }}
                  />
                  <Card.Title name="name">{item.name}</Card.Title>
                  <Card.Text name="price">Đơn giá:{item.price}</Card.Text>
                  <Card.Text name="quantity">
                    Số lượng: {item.quantity}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      showDetail(item);
                    }}
                  >
                    <i class="fas fa-eye"></i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Footer />
      </div>
    </Router>
    // <>
    // <FooterContainer/>
    // </>
  );
}

export default App;
