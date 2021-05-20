import axiosClient from "./axiosClient";
import authHeader from "./authHeader";

const userApi = {
  login: (params) => {
    const url = "/user/login";
    return axiosClient.post(url, params);
  },
};

export default userApi;
