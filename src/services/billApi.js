import axiosClient from "./axiosClient";
import authHeader from "./authHeader";

const billApi = {
  addBill: (orderId, date) => {
    const addBillUrl = `/bills`;
    const param = {
      orderId: orderId,
      date: date,
    };

    return axiosClient.post(addBillUrl, param, {
      headers: authHeader(),
    });
  },

  getByCartId: (cartId) => {
    const url = `/orders?cartId=${cartId}`;
    return axiosClient.get(url, { cartId, headers: authHeader() });
  },

  getOrderList: async () => {
    const cartId = localStorage.getItem("cartId");

    // Get api by relationship: https://github.com/typicode/json-server#relationships
    const getOrderUrl = `orders?cartId=${cartId}&_expand=product`;
    return axiosClient.get(getOrderUrl, { cartId, headers: authHeader() });
  },
};

export default billApi;
