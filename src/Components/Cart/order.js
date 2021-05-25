import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import orderApi from "../../services/orderApi";
import cartApi from "../../services/cartApi";
import { Checkbox } from "@material-ui/core";
import { FormControl, InputGroup } from "react-bootstrap";

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
  const { order, onRemoveClick, onQuantityChange } = props;
  const product = order.product;
  const [cart, setCart] = useState();
  const [checked, setChecked] = useState(false);
  const [orderList, setOrderList] = useState([]);

  const userData = JSON.parse(localStorage.getItem("userData"));

  // useEffect(() => {
  //   const getOrderList = async () => {
  //     const response = await cartApi.getOrderList(userData.user_id);
  //     setOrderList(response);
  //     console.log("orderList", response);
  //   };
  //   getOrderList();
  // }, []);

  const handleRemoveClick = () => {
    // const cartId = localStorage.getItem("cartId");
    // const userId = localStorage.getItem("userId");
    // await orderApi.deleteOrder(cartId, product.id);
    // const id = product.id;
    // console.log(id);
    // const list = orderList.filter((order) => order.product.id != id);
    // // list.splice(id, 1);
    // setList({ orderList: list });
    // console.log(list);
    // {
    //   list.map((order) => <Order key={order.id} order={order}></Order>);
    // }

    // console.log("List", list);

    //await orderApi.updateOrder(cartId);
    //await cartApi.getOrderList(userId);
    if (onRemoveClick) onRemoveClick(order);
  };
  const handleLoadClick = async () => {};

  const handleQuantityChange = () => {
    if (onQuantityChange) onQuantityChange(product);
  };
  const handleCheckClick = () => {
    setChecked(!checked);
    // if (onCheckChange) onCheckChange(product);
  };
  return (
    <tr className="row" style={{ height: "6rem", width: "1350px" }}>
      <td className="col-sm-1">
        <InputGroup style={{ marginTop: "1rem" }}>
          <InputGroup.Prepend>
            <InputGroup.Checkbox onClick={handleCheckClick} checked={checked} />
          </InputGroup.Prepend>
        </InputGroup>
      </td>

      <td className="col-sm-4">
        <div className="media">
          <a className="thumbnail pull-left" href="#">
            <img
              className="media-object"
              src={product.imageUrl}
              style={{ width: "72px", height: "72px", marginTop: "-1rem" }}
            />
          </a>

          <h4
            className="media-heading"
            style={{ marginTop: "1rem", fontSize: "22px" }}
          >
            <a href="#">{product.name}</a>
          </h4>
        </div>
      </td>
      <td className="col-sm-1">
        <div>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            style={{ marginTop: "0.5rem", textAlign: "center", width: "40px" }}
            value={order.quantity}
          />
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
            <b style={{ fontWeight: "bolder" }}>
              {order.quantity * product.price} VNĐ
            </b>
          </h3>
        </div>
      </td>
      <td className="col-sm-2">
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
