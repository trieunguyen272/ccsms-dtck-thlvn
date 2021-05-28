import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import cartApi from "../../services/cartApi";
import Order from "./order";
import orderApi from "../../services/orderApi";
import billApi from "../../services/billApi";

export default function Cart() {
  const history = useHistory();
  const [orderList, setOrderList] = useState([]);
  const [quantityProductOrder, setQuantityProductOrder] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const userData = JSON.parse(localStorage.getItem("userData"));
  let totalPriceTemp = 0;
  //let count = 0;
  const [count, setCount] = useState(1);
  const [value, getValue] = useState(0);

  useEffect(() => {
    if (userData && userData.access_token) {
      const userId = userData.user_id;

      const apiGetOrderList = async () => {
        if (
          localStorage.getItem("cartId") === undefined ||
          localStorage.getItem("cartId") === null
        ) {
          const responseCart = await cartApi.getByUserId(userId);

          // Nếu user chưa có trong bảng cart thì thêm user đó
          if (responseCart.length === 0) {
            const response = cartApi.addCart(userId);
            localStorage.setItem("cartId", response.id);
          } else {
            const cartId = responseCart[0].id;
            localStorage.setItem("cartId", cartId);
          }
        }

        const response = await cartApi.getOrderList();
        setOrderList(response);

        calculateTotalPrice(response);
      };
      apiGetOrderList();
    } else {
      history.push("/login");
    }
  }, []);

  useEffect(() => {
    setCount((count) => count + 1);
  }, []);

  const removeOrder = async (order) => {
    const cartId = localStorage.getItem("cartId");
    console.log(order.product.id);
    const productId = order.product.id;
    console.log(productId);
    await orderApi.deleteOrder(cartId, productId);
    const list = orderList.filter((order) => order.product.id !== productId);
    setOrderList(list);
  };

  const quantityChange = () => {};

  const quantityOrder = async (order) => {
    const count = order.quantity;
    getValue(count);
  };

  const incrementOrder = async (order) => {
    const productId = -1;
    await orderApi.updateQuantityOrder(
      order.cartId,
      order.quantity + 1,
      order.product.id
    );
    const list = orderList.filter((order) => order.product.id !== productId);
    setOrderList(list);
    list.map((order) => {
      const price = order.product.price * order.quantity;
      totalPriceTemp += price;
    });
    setTotalPrice(totalPriceTemp);
    console.log("da tang", orderList);
  };

  const calculateTotalPrice = (orderList) => {
    if (orderList.length > 0) {
      orderList.map((order) => {
        const price = order.product.price * order.quantity;
        totalPriceTemp += price;
      });
    }
    setTotalPrice(totalPriceTemp);
  };
  const handleAddBillClick = async () => {
    const cartId = localStorage.getItem("cartId");

    const responseOrder = await billApi.getByCartId(cartId);

    // const response = await cartApi.addCart(userId);
    //localStorage.setItem("orderId", response.id);

    const orderId = responseOrder[0].id;
    localStorage.setItem("orderId", orderId);

    orderId = localStorage.getItem("orderId");
    // console.log("order", orderId);
    await billApi.addBill(orderId, Date.now());
    // const billUrl = `/bill`;
    // history.push(billUrl);
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
                    <th className="col-sm-3 text-center">Sản phẩm</th>
                    <th className="col-sm-2 text-center">Số lượng</th>
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
                      onValueQuantity={quantityOrder}
                      onIncrementClick={incrementOrder}
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
                        onClick={handleAddBillClick}
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
