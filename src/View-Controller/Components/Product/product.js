import productApi from "../../../Model/services/productApi";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ProductCard from "./productCart";

export default function Product(props) {
  const { product } = props;
  const [productList, setProductList] = useState([]);
  const history = useHistory();

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
    history.push(detailUrl);
  };

  return (
    <Row>
      {productList.map((product) => (
        <Col key={product.id} lg="">
          <ProductCard product={product} onToDetailClick={showDetail} />
        </Col>
      ))}
    </Row>
  );
}
