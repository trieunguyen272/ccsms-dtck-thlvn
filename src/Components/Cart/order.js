import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import orderApi from "../../services/orderApi";

Order.propTypes = {
  order: PropTypes.object,
  handleRemoveClick: PropTypes.func,
  handleQuantityChange: PropTypes.func,
};

Order.defaultProps = {
  order: {},
  handleRemoveClick: null,
  handleQuantityChange: null,
};

export default function Order(props) {
  const { order, onRemoveClick, onIncrementClick, onValueQuantity } = props;

  const product = order.product;
  const history = useHistory();
  const [count, setCount] = useState(order.quantity);

  const handleIncrement = () => {
    if (onIncrementClick) {
      onIncrementClick(order);
    }
    // await orderApi.updateQuantityOrder(order.cartId, count + 1, product.id);
  };

  const handleDecrement = async () => {
    // await orderApi.updateQuantityOrder(order.cartId, count - 1, product.id);
    // setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : (prevCount = 1)));
  };
  const valueQuantity = () => {
    if (onValueQuantity) onValueQuantity(order.quantity);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(order);
  };

  const showDetail = () => {
    const detailUrl = `/product-detail/${product.id}`;
    history.push(detailUrl);
  };

  return (
    <tr className="row" style={{ height: "6rem", width: "1350px" }}>
      <td className="col-sm-3">
        <div className="media">
          <a className="thumbnail pull-left" href="/">
            <img
              className="media-object"
              src={product.imageUrl}
              style={{ width: "72px", height: "72px", marginTop: "-1rem" }}
            />
          </a>

          <h4
            className="media-heading"
            style={{ marginTop: "1rem", fontSize: "22px" }}
            onClick={showDetail}
          >
            <a href="">{product.name}</a>
          </h4>
        </div>
      </td>
      <td className="col-sm-2">
        <div>
          <Button
            style={{
              marginLeft: "-8rem",
              marginTop: "1rem",
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

          <input
            type="quantity"
            className="form-control"
            style={{
              marginTop: "-2.4rem",
              textAlign: "center",
              width: "56px",
              height: "34px",
              marginLeft: "70px",
            }}
            value={count}
          />

          <Button
            style={{
              marginLeft: "8rem",
              marginTop: "-3.1rem",
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
        </div>
      </td>
      <td className="col-sm-2">
        <div className="media">
          <h3
            className="media-heading"
            style={{ marginTop: "1rem", fontSize: "20px" }}
          >
            <b style={{ fontWeight: "bolder" }}>{product.price} VNĐ</b>
          </h3>
        </div>
      </td>
      <td className="col-sm-2">
        <div className="media">
          <h3
            className="media-heading"
            style={{ marginTop: "1rem", fontSize: "20px" }}
          >
            <b style={{ fontWeight: "bolder" }}>{count * product.price} VNĐ</b>
          </h3>
        </div>
      </td>
      <td className="col-sm-2 text-right">
        <button
          type="button"
          class="btn btn-danger"
          onClick={handleRemoveClick}
        >
          <span class="glyphicon glyphicon-remove"></span>
          Remove
        </button>
      </td>
    </tr>
  );
}
