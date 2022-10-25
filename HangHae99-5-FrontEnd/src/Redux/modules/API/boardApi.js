import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refreshToken");

// const instance = axios.create({
//   BASE_URL: process.env.REACT_APP_SERVER,
// });

// instance.interceptors.request.use(config => {
//   config.headers["Content-Type"] = "multipart/form-data";
//   return config;
// });

//     .post(`${BASE_URL}/api/boards/create`, frm, {
//       headers: {
//         Authorization: accessToken,
//         "Refresh-Token": refreshToken,
//         "Content-Type": "multipart/form-data",
//       },
//     })



export const postBoardApi = async (payload) => {
  const response = await axios.post(`${BASE_URL}/api/boards/create`, payload, {
    headers: {
      Authorization: accessToken,
      "Refresh-Token": refreshToken,
    }
  });
  return response.data
  };

  export const fileUploadApi = async (payload) => {
    await axios.post(`${BASE_URL}/file`, payload);
  };

  export const getBoardApi = async () => {
    const response = await axios.get(`${BASE_URL}/api/boards/list`); 
    return response.data;
  };

  export const delBoardApi = async (id) => {
    await axios.delete(`${BASE_URL}/api/boards/delete?board-id=${id}`);
  };

  export const getBoardIdApi = async (id) => {
    const response = await axios.get(`${BASE_URL}/api/boards/detail/${id}`);  
    return response.data;
  };

  export const editBoardApi = async (edit) => {
    await axios.put(`${BASE_URL}/api/boards/update?board-id=${edit.id}`,edit);
  };