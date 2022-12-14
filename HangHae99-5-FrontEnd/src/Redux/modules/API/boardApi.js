import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;
const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refreshToken");

// 게시글 작성하는 api(동작함)
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

export const countHeartApi = async (payload) => {
  await axios.post(`${BASE_URL}/api/hearts/${payload}`, accessToken, {
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



export const editBoardApi = async (payload) => { 
  const response = await axios.put(
    `${BASE_URL}/api/boards/update/${payload.id}`, payload.update, {
      headers: {
        Authorization: accessToken,
        "Refresh-Token": refreshToken,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
