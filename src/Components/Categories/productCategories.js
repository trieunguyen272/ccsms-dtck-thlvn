import categorytApi from "../../services/categoriesApi";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import ProductCard from "../Product/productCart";
import { Col, Row } from "react-bootstrap";

function ProductCategoriesList() {
  const { categorytId } = useParams();
  const [productCategoriesList, setProductCategoriesList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getProductCategoriesList = async () => {
      const response = await categorytApi.getAllProduct(categorytId);
      setProductCategoriesList(response);
      console.log(response);
    };
    getProductCategoriesList();
  }, []);

  const showDetail = (product) => {
    const detailUrl = `/product-detail/${product.id}`;
    history.push(detailUrl);
  };

  return (
    <Row>
      {productCategoriesList.map((product) => (
        <Col key={product.id} lg="3">
          <ProductCard product={product} onToDetailClick={showDetail} />
        </Col>
      ))}
    </Row>
  );
}
export default ProductCategoriesList;
