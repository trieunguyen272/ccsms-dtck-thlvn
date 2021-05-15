import axios from "axios";

const BaseURL = "http://localhost:4000/api";

export const signup = async (data) => {
  const url = `${BaseURL}/user/register`;
  const headers = {
    "content-Type": "application/json",
  };

  const options = {
    method: "POST",
    headers,
    data: JSON.stringify(data),
    url,
  };

  try {
    const response = await axios(options);
    const result = response;
    return result;
  } catch (error) {
    return error.response;
  }
};
