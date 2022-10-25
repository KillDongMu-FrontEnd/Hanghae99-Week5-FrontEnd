import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const instance = axios.create({
  BASE_URL: process.env.REACT_APP_SERVER,
});

instance.interceptors.request.use(config => {
  config.headers["Content-Type"] = "multipart/form-data";
  return config;
});

export const postBoardApi = async (payload) => {
    await axios.post(`${BASE_URL}/api/boards/create`, payload);
  };

  export const fileUploadApi = async (payload) => {
    await axios.post(`${BASE_URL}/file`, payload);
  };

  export const getBoardApi = async () => {
    const response = await axios.get(`${BASE_URL}/api/boards/list`); 
    console.log(response.data) 
    return response.data;
  };

  export const delBoardApi = async (id) => {
    await axios.delete(`${BASE_URL}/api/boards/delete?board-id=${id}`);
  };

  export const getBoardIdApi = async (id) => {
    const response = await axios.get(`${BASE_URL}/api/boards/detail?board-id=${id}`);  
    return response.data[0];
  };

  export const editBoardApi = async (edit) => {
    await axios.put(`${BASE_URL}/api/boards/update?board-id=${edit.id}`,edit);
  };