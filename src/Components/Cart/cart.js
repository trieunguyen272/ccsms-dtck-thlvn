import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import cartApi from "../../services/cartApi";
import Order from "./order";
import orderApi from "../../services/orderApi";

export default function Cart() {
  const history = useHistory();
  const [orderList, setOrderList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  let totalPriceTemp = 0;
  const [list, setList] = useState({ orderList: [] });
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [checked, setChecked] = useState();

  useEffect(() => {
    if (userData && userData.access_token) {
      console.log("access_token cart", userData.access_token);

      const getOrderList = async () => {
        const response = await cartApi.getOrderList(userData.user_id);
        setOrderList(response);
        console.log("orderList", response);

        calculateTotalPrice(response);
      };
      getOrderList();
    } else {
      history.push("/login");
    }
  }, []);

  // useEffect(() => {
  //   const getChecked = () => {
  //     const response = (checked) => (checked = !checked);
  //     setChecked(response);
  //     console.log("response", response);
  //   };
  //   getChecked();
  // }, []);

  const checkOrder = async (order) => {};
  const changeCheckOrder = (e) => {
    const checked = e.target.value;
    console.log(checked);
    console.log("da check");
    //setChecked((checked) => checked.set(e.target.value));
    // setChecked({ checked, checked: !e.target.value });
    //this.setState({ location: !e.target.checked });
    setChecked(!e.target.value);
    // checked = !checked;
    console.log(checked);

    // const unck = !checked;
    // setChecked(unck);
    //
    //console.log(!checked);
  };
  const removeOrder = async (order) => {
    const cartId = localStorage.getItem("cartId");
    console.log(order.product.id);
    const productId = order.product.id;
    console.log(productId);
    await orderApi.deleteOrder(cartId, productId);
    const list = orderList.filter((order) => order.product.id != productId);
    setOrderList(list);
  };

  const quantityChange = () => {};
  // const checkChange = () => {};

  const calculateTotalPrice = (orderList) => {
    if (orderList.length > 0) {
      orderList.map((order) => {
        const price = order.product.price * order.quantity;
        totalPriceTemp += price;
      });
    }
    setTotalPrice(totalPriceTemp);
  };
  const transitionUrl = () => {
    const tranUrl = `/transition`;
    history.push(tranUrl);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div style={{ marginLeft: "-15rem", width: "3rem" }}>
            {orderList.length === 0 ? (
              <h1>Giỏ hàng rỗng</h1>
            ) : (
              <table className="table table-hover">
                <thead>
                  <tr className="row">
                    <th className="col-sm-1">Mua hàng</th>

                    <th className="col-sm-4 text-center">Sản phẩm</th>
                    <th className="col-sm-1 text-center">Số lượng</th>
                    <th className="col-sm-2 text-center">Đơn giá</th>
                    <th className="col-sm-2 text-center">Tổng tiền</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {orderList.map((order) => (
                    <Order
                      key={order.id}
                      order={order}
                      onCheckClick={checkOrder}
                      onChangeCheck={(e) => changeCheckOrder(e)}
                      onRemoveClick={removeOrder}
                      handleQuantityChange={quantityChange}
                    />
                  ))}

                  <tr className="row">
                    <td className="col-sm-1">   </td>
                    <td className="col-sm-4">   </td>
                    <td className="col-sm-2">   </td>
                    <td className="col-sm-2 text-left">
                      <h5>Tổng tiền</h5>
                    </td>
                    <td className="col-sm-2 text-left">
                      <h5>
                        <strong>{totalPrice} VNĐ</strong>
                      </h5>
                    </td>
                  </tr>

                  <tr className="row">
                    <td className="col-sm-1">   </td>
                    <td className="col-sm-4">   </td>
                    <td className="col-sm-2">   </td>
                    <td className="col-sm-2">   </td>
                    <td className="col-sm-3 text-right">
                      <button
                        type="button"
                        className="btn btn-default"
                        onClick={transitionUrl}
                      >
                        <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                        Đặt hàng
                      </button>
                    </td>
                    {/* <td>
                      <button type="button" className="btn btn-success">
                        Checkout{" "}
                        <span className="glyphicon glyphicon-play"></span>
                      </button>
                    </td> */}
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
