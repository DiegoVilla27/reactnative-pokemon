import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

axios.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (request: InternalAxiosRequestConfig<any>) {
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (response: AxiosResponse<any, any>) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;
