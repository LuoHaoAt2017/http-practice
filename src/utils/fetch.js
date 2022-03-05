import axios from "axios";

const fetch = axios.create({
  baseURL: "http://localhost:9000",
  timeout: 10000,
});

fetch.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

fetch.interceptors.response.use(
  function (resp) {
    return resp.data;
  },
  function (err) {
    return Promise.reject(err.stack);
  }
);

export default fetch;
