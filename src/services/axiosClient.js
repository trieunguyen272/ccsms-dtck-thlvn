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

// axiosClient.interceptors.request.use((config) => {
//   const userData = localStorage.getItem("userData");

//   if (userData) {
//     const token = JSON.parse(userData).access_token;

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//   }

//   return config;
// });

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      console.log(response);
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
