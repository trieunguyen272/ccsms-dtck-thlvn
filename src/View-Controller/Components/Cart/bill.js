import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { InputGroup } from "react-bootstrap";
import billApi from "../../../Model/services/billApi";
import Order from "./order";
import orderApi from "../../../Model/services/orderApi";

export default function Bill() {
  const history = useHistory();
  const [billList, setBillList] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    if (userData && userData.access_token) {
      const apiGetBillList = async () => {
        const userId = userData.user_id;
        const response = await billApi.getBillList(userId);
        setBillList(response);
      };
      apiGetBillList();
    } else {
      history.push("/login");
    }
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div style={{ marginLeft: "-15rem", width: "1350px" }}>
            {billList.length === 0 ? (
              <h1></h1>
            ) : (
              <table className="table table-hover">
                <thead>
                  <tr
                    className="row"
                    style={{ height: "3rem", width: "1350px" }}
                  >
                    <th className="col-sm-5 text-center">Sản phẩm</th>
                    <th className="col-sm-3 text-center">Số lượng</th>
                    <th className="col-sm-4 text-center">Tổng tiền</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {billList[0].orders.map((order) => (
                    <tr className="row">
                      <td className="col-sm-5">{order.product.name}</td>
                      <td className="col-sm-3">{order.quantity}</td>
                      <td className="col-sm-4">
                        {order.product.price * order.quantity}
                      </td>
                    </tr>
                  ))}

                  <tr className="row">
                    <td className="col-sm-1">   </td>
                    <td className="col-sm-4">   </td>
                    <td className="col-sm-2">   </td>
                    <td className="col-sm-2">   </td>
                    <td className="col-sm-3 text-right"></td>
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
