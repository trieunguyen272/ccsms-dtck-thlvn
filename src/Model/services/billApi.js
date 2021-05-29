import axiosClient from "./axiosClient";
import authHeader from "./authHeader";
import productApi from "./productApi";

const billApi = {
  addBill: async (userId, orders) => {
    const response = await billApi.getByUserId(userId);

    if (response.length === 0) {
      const addBillUrl = `/bills`;
      const param = {
        orders: orders,
        userId: userId,
      };

      return axiosClient.post(addBillUrl, param, { headers: authHeader() });
    } else {
      const ordersBillList = response[0].orders.concat(orders);
      const addBillUrl = `/bills/${response[0].id}`;
      const param = {
        orders: ordersBillList,
      };

      return axiosClient.patch(addBillUrl, param, { headers: authHeader() });
    }
  },

  getByUserId: async (userId) => {
    const url = `/bills?userId=${userId}`;
    return await axiosClient.get(url, { userId, headers: authHeader() });
  },

  getBillList: async (userId) => {
    const url = `/bills?userId=${userId}`;
    const response = await axiosClient.get(url, {
      userId,
      headers: authHeader(),
    });

    if (response.length > 0) {
      const orderList = response[0].orders;
      let orderListProductDetail = [];

      if (orderList.length > 0) {
        for (let i = 0; i < orderList.length; i++) {
          const responseProduct = await productApi.get(orderList[i].productId);
          const product = {
            quantity: orderList[i].quantity,
            product: responseProduct,
          };
          orderListProductDetail.push(product);
        }
      }

      response[0]["orders"] = orderListProductDetail;
    }

    return response;
  },
};

export default billApi;
