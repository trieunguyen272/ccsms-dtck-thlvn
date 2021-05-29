import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

Order.propTypes = {
  order: PropTypes.object,
  handleRemoveClick: PropTypes.func,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
};

Order.defaultProps = {
  order: {},
  handleRemoveClick: null,
  handleIncrement: null,
  handleDecrement: null,
};

export default function Order(props) {
  const { order, onRemoveClick, onIncrementClick, onDecrementClick } = props;

  const product = order.product;
  const history = useHistory();
  const [count, setCount] = useState(order.quantity);

  const handleIncrement = () => {
    if (onIncrementClick) {
      onIncrementClick(order);
    }
  };

  const handleDecrement = async () => {
    if (onDecrementClick) {
      onDecrementClick(order);
    }
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(order);
  };

  const showDetail = () => {
    const detailUrl = `/product-detail/${product.id}`;
    history.push(detailUrl);
  };

  useEffect(() => {
    setCount(order.quantity);
  }, [order]);

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
          <button
            type="button"
            style={{
              marginLeft: "0rem",
              marginTop: "1rem",
              fontSize: "20px",
              width: "60px",
              height: "2rem",
              textAlign: "center",
              display: "inline-block",
              background: "white",
            }}
            onClick={handleDecrement}
          >
            -
          </button>

          <input
            type="quantity"
            style={{
              marginTop: "0rem",
              marginLeft: "0rem",
              textAlign: "center",
              width: "56px",
              height: "30px",
            }}
            value={count}
          />

          <button
            type="button"
            style={{
              marginLeft: "0rem",
              marginTop: "0rem",
              fontSize: "20px",
              width: "60px",
              height: "2rem",
              textAlign: "center",
              display: "inline-block",
              background: "white",
            }}
            onClick={handleIncrement}
          >
            +
          </button>
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
