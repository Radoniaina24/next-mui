import Axios from "axios";

// todo: add other configuration
const axios = Axios.create({
  baseURL: process.env.BASE_URL || "https://jsonplaceholder.typicode.com/",
});

export default axios;
