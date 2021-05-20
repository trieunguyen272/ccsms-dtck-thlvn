import axiosClient from "./axiosClient";
import authHeader from "./authHeader";

const cartApi = {
  getByUserId: (id) => {
    const url = `/carts?userId=${id}`;
    return axiosClient.get(url, { id, headers: authHeader() });
  },

  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default cartApi;
