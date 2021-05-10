import axiosClient from "./axiosClient";


const categorytApi = {
  getAll: () => {
    const url = "/categories";
    return axiosClient.get(url);
  },

  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default categorytApi;
