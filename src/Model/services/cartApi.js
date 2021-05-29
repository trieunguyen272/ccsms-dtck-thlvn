import axiosClient from "./axiosClient";
import authHeader from "./authHeader";

const cartApi = {
  addCart: (userId) => {
    const addCartUrl = `/carts`;
    const param = {
      userId: userId,
    };

    return axiosClient.post(addCartUrl, param, {
      headers: authHeader(),
    });
  },

  getByUserId: (userId) => {
    const url = `/carts?userId=${userId}`;
    return axiosClient.get(url, { userId, headers: authHeader() });
  },

  getOrderList: async () => {
    const cartId = localStorage.getItem("cartId");

    // Get api by relationship: https://github.com/typicode/json-server#relationships
    const getOrderUrl = `orders?cartId=${cartId}&_expand=product`;
    return axiosClient.get(getOrderUrl, { cartId, headers: authHeader() });
  },
};

export default cartApi;
