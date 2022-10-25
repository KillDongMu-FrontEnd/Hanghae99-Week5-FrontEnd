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
    },
  });
  return response.data;
};

export const fileUploadApi = async (payload) => {
  await axios.post(`${BASE_URL}/file`, payload);
};

export const getBoardApi = async () => {
  const response = await axios.get(`${BASE_URL}/api/boards/list`);
  return response.data;
};

export const delBoardApi = async (boardId) => {
  await axios.delete(`${BASE_URL}/api/boards/delete/${boardId}`, {
    headers: {
      Authorization: accessToken,
      "Refresh-Token": refreshToken,
      "Content-Type": "application/json",
    },
  });
};

export const getBoardIdApi = async (id) => {
  const response = await axios.get(`${BASE_URL}/api/boards/detail/${id}`);
  return response.data;
};

export const editBoardApi = async (edit) => {
  const response = await axios.post(
    `${BASE_URL}/api/boards/update/${edit.id}`,
    edit,
    {
      headers: {
        Authorization: accessToken,
        "Refresh-Token": refreshToken,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
