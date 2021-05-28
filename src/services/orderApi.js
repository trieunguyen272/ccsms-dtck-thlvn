import axiosClient from "./axiosClient";
import authHeader from "./authHeader";

const orderApi = {
  addOrder: async (cartId, quantity, productId) => {
    const getOrderUrl = `orders?productId=${productId}&cartId=${cartId}`;
    const responseOrder = await axiosClient.get(getOrderUrl, {
      productId,
      headers: authHeader(),
    });

    if (responseOrder.length === 0) {
      const addOrderUrl = `/orders`;
      const param = {
        cartId: cartId,
        quantity: quantity,
        productId: productId,
      };
      await axiosClient.post(addOrderUrl, param, { headers: authHeader() });
    } else {
      const orderId = responseOrder[0].id;
      const getOrderUrl = `orders?productId=${productId}&cartId=${cartId}`;
      const response = await axiosClient.get(getOrderUrl, {
        orderId,
        headers: authHeader(),
      });
      const updateOrderUrl = `/orders/${orderId}`;
      const param = {
        cartId: cartId,
        quantity: quantity + response[0].quantity,
        productId: productId,
      };

      await axiosClient.patch(updateOrderUrl, param, {
        headers: authHeader(),
      });
    }
  },

  deleteOrder: async (cartId, productId) => {
    const getOrderUrl = `orders?productId=${productId}&cartId=${cartId}`;
    const responseOrder = await axiosClient.get(getOrderUrl, {
      cartId,
      headers: authHeader(),
    });
    const orderId = responseOrder[0].id;
    const deleteOrderUrl = `/orders/${orderId}`;
    await axiosClient.delete(deleteOrderUrl, {
      headers: authHeader(),
    });
  },

  updateQuantityOrder: async (cartId, quantity, productId) => {
    const getOrderUrl = `orders?productId=${productId}&cartId=${cartId}`;
    const responseOrder = await axiosClient.get(getOrderUrl, {
      productId,
      headers: authHeader(),
    });
    const orderId = responseOrder[0].id;
    const updateOrderUrl = `/orders/${orderId}`;
    const param = {
      cartId: cartId,
      quantity: quantity,
      productId: productId,
    };

    await axiosClient.patch(updateOrderUrl, param, {
      headers: authHeader(),
    });
  },

  getQuantityOrder: (cartId, productId) => {
    const getOrderUrl = `orders?productId=${productId}&cartId=${cartId}`;
    return axiosClient.get(getOrderUrl, {
      cartId,
      productId,
      headers: authHeader(),
    });
  },
};

export default orderApi;
