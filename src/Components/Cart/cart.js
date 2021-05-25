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
  useEffect(() => {}, []);

  const removeOrder = async (order) => {
    const cartId = localStorage.getItem("cartId");
    const userId = localStorage.getItem("userId");
    console.log(order.product.id);
    const productId = order.product.id;
    console.log(productId);
    await orderApi.deleteOrder(cartId, productId);
    const list = orderList.filter((order) => order.product.id != productId);
    console.log(list);
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
                      onRemoveClick={removeOrder}
                      handleQuantityChange={quantityChange}
                    />
                  ))}

                  <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td>
                      <h5>Subtotal</h5>
                    </td>
                    <td className="text-right">
                      <h5>
                        <strong>{totalPrice} VNĐ</strong>
                      </h5>
                    </td>
                  </tr>
                  <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td>
                      <h5>Estimated shipping</h5>
                    </td>
                    <td className="text-right">
                      <h5>
                        <strong></strong>
                      </h5>
                    </td>
                  </tr>
                  <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td>
                      <h3>Total</h3>
                    </td>
                    <td className="text-right">
                      <h3>
                        <strong></strong>
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td>
                      <button type="button" className="btn btn-default">
                        <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                        Continue Shopping
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-success">
                        Checkout{" "}
                        <span className="glyphicon glyphicon-play"></span>
                      </button>
                    </td>
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
