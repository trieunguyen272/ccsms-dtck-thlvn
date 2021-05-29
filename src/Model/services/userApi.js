import axiosClient from "./axiosClient";

const userApi = {
  login: (params) => {
    const url = "/user/login";
    return axiosClient.post(url, params);
  },
};

export default userApi;
