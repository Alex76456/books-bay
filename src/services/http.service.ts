import axios from "axios";

const configFile = {
  apiEndpoint:
    "https://bookstore-test-7339f-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const http = axios.create({ baseURL: configFile.apiEndpoint });

http.interceptors.request.use(
  function (config) {
    if (config.url) {
      config.url = config.url + ".json";
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
};

export default httpService;
