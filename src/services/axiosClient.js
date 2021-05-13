import axios from "axios";
import queryString from "query-string";

//Tạo ra một đối tượng axios
const axiosClient = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "content-type": "application/json",
  },

  paramsSerializer: (params) => queryString.stringify(params),
});


axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
