import axiosClient from "./axiosClient";
import authHeader from "./authHeader";

const cartApi = {
  getByUserId: (id) => {
    const url = `/carts?userId=${id}`;
    return axiosClient.get(url, { id, headers: authHeader() });
  },

  getOrderList: async (userId) => {
    if (localStorage.getItem("cartId") === undefined) {
      const getCartUrl = `/carts?userId=${userId}`;
      const responseCart = await axiosClient.get(getCartUrl, {
        userId,
        headers: authHeader(),
      });
      // Nếu user chưa có trong bảng cart thì thêm user đó
      if (responseCart.length === 0) {
        const addCartUrl = `/carts`;
        const param = {
          userId: userId,
        };

        const response = await axiosClient.post(addCartUrl, param, {
          headers: authHeader(),
        });

        localStorage.setItem("cartId", response.id);
      } else {
        const cartId = responseCart[0].id;
        localStorage.setItem("cartId 1", cartId);

        // Get api by relationship: https://github.com/typicode/json-server#relationships
        const getOrderUrl = `orders?cartId=${cartId}&_expand=product`;

        return axiosClient.get(getOrderUrl, { cartId, headers: authHeader() });
      }
    } else {
      const cartId = localStorage.getItem("cartId");

      // Get api by relationship: https://github.com/typicode/json-server#relationships
      const getOrderUrl = `orders?cartId=${cartId}&_expand=product`;

      return axiosClient.get(getOrderUrl, { cartId, headers: authHeader() });
    }
  },
};

export default cartApi;
