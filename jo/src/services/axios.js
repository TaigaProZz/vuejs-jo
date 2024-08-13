import axios  from "axios";

const axiosBase = (contentType = "application/json") => {
  return axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
      "Content-Type": contentType,
    },
  });
}

export { axiosBase }