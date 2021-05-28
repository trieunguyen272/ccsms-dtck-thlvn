import React from "react";
import { InputGroup } from "react-bootstrap";
import billApi from "../../services/billApi";
import Order from "./order";
import orderApi from "../../services/orderApi";

export default function Bill() {
  const userData = JSON.parse(localStorage.getItem("userData"));

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
    // const productUrl = `/cart`;
    // history.push(productUrl);
  };
  return <div></div>;
}
