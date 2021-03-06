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
      console.log(response);
      return response.data;
    }
    return response;
  },
  (error) => {
    console.log("error.response", error.response);
    if (error.response && error.response.data.status === 401) {
      localStorage.removeItem("userData");
      console.log("Removed localStorage");
      window.location = "/login";
    }

    throw error;
  }
);

export default axiosClient;
