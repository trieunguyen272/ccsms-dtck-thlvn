import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../public/image/banner_1.jpg";
import banner2 from "../../public/image/banner_2.jpg";
import banner3 from "../../public/image/banner_3.jpg";
import banner4 from "../../public/image/banner_4.png";
import banner5 from "../../public/image/banner_5.jpg";
import banner6 from "../../public/image/banner_6.jpg";
import banner7 from "../../public/image/banner_7.jpg";
import Product from "../Product/product";

export default function Home() {
  return (
    <div>
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

      <Product />
    </div>
  );
}
