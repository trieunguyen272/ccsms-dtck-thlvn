import categorytApi from "../../services/categoriesApi";
import productApi from "../../services/productApi";
// import { Card, Button, Carousel, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import ProductCard from "../Product/productCart";
import Product from "../Product/product";
import { Col, Row } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";

function ProductCategoriesList() {
  const { categorytId } = useParams();
  const [productCategoriesList, setProductCategoriesList] = useState([]);
  const [productCategories, setProductCategories] = useState([]);

  useEffect(() => {
    const getProductCategoriesList = async () => {
      const response = await categorytApi.getAllProduct(categorytId);
      setProductCategoriesList(response);
      console.log(response);
    };
    getProductCategoriesList();
  }, []);


  return (
    <Row>
      
        {productCategoriesList.map((product) => (
        <Col key={product.id} lg="3">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}
export default ProductCategoriesList;
