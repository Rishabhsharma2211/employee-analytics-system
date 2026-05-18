import axios from "axios";

const API = axios.create({
  baseURL:
    "https://employee-analytics-system-aecm.onrender.com/api",
});

export default API;