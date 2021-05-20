import axiosClient from "./axiosClient";

const categorytApi = {
  getAll: () => {
    const url = "/categories";
    return axiosClient.get(url);
  },

  getAllProduct: (id) => {
    const url = `/products?categoryId=${id}`;
    return axiosClient.get(url);
  },

  get: (id) => {
    const url = `/categoryId/${id}`;
    return axiosClient.get(url);
  },
};

export default categorytApi;
