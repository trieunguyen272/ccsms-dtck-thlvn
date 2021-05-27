import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import orderApi from "../../services/orderApi";
import cartApi from "../../services/cartApi";
import { Checkbox } from "@material-ui/core";
import { FormControl, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

Order.propTypes = {
  order: PropTypes.object,
  handleCheckClick: PropTypes.func,
  handleChangCheck: PropTypes.func,
  handleRemoveClick: PropTypes.func,
  handleQuantityChange: PropTypes.func,
};

Order.defaultProps = {
  order: {},
  handleCheckClick: null,
  handleChangCheck: null,
  handleRemoveClick: null,
  handleQuantityChange: null,
};

export default function Order(props) {
  const {
    e,
    order,
    onCheckClick,
    onChangeCheck,
    onRemoveClick,
    onQuantityChange,
  } = props;
  const product = order.product;
  const [cart, setCart] = useState();
  const [checked, setChecked] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const history = useHistory();
  const [count, setCount] = useState([order.quantity]);

  const userData = JSON.parse(localStorage.getItem("userData"));

  const handleIncrement = () => {
    console.log("hi");
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : (prevCount = 0)));
  };
  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(order);
  };
  const handleLoadClick = async () => {};

  const handleQuantityChange = () => {
    if (onQuantityChange) onQuantityChange(product);
  };
  const handleChangeCheck = (e) => {
    if (onChangeCheck) onChangeCheck(e);
  };

  const showDetail = () => {
    const detailUrl = `/product-detail/${product.id}`;
    history.push(detailUrl);
  };
  return (
    <tr className="row" style={{ height: "6rem", width: "1350px" }}>
      <td className="col-sm-1">
        {/* <input
          type="checkbox"
          onChange={handleCheckClick}
          checked="false"
        ></input> */}
        <InputGroup style={{ marginTop: "1rem" }}>
          <InputGroup.Prepend>
            <InputGroup.Checkbox
              onChange={(e) => handleChangeCheck(e)}
              value={checked}
            />
          </InputGroup.Prepend>
        </InputGroup>
      </td>

      <td className="col-sm-4">
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
      <td className="col-sm-1">
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
        <div>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            style={{ marginTop: "0.5rem", textAlign: "center", width: "40px" }}
            // value={order.quantity}
            value={count}
          />
        </div>
        <Button
          style={{
            marginLeft: "5rem",
            marginTop: "-2.2rem",
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
      {/* <td className="col-sm-2">
        <button type="button" class="btn btn-danger" onClick={handleLoadClick}>
          <span class="glyphicon glyphicon-remove"></span>
          Load
        </button>
      </td> */}
    </tr>
  );
}
