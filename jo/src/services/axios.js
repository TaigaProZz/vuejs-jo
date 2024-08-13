import axios  from "axios";

const axiosBase = (contentType = "application/json") => {
  return axios.create({
    withCredentials: true,
    baseURL: "https://nestjs-api-jo.vercel.app/",
    headers: {
      "Content-Type": contentType,
    },
  });
}

export { axiosBase }