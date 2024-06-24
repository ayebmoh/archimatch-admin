import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/';

const axiosInstance = axios.create({ baseURL: BASE_URL });

export const fetchData = async (endpoint) => {
  return await axiosInstance.get(endpoint);
};

export const postData = async (endpoint, data) => {
  return axiosInstance.post(endpoint, data);
};

export const putData = async (endpoint, data) => {
  return axiosInstance.put(endpoint, data);
};

export const deleteData = async (endpoint) => {
  return axiosInstance.delete(endpoint);
};
