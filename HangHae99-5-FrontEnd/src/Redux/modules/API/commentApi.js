import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refreshToken");

// 댓글 작성하는 api(동작함)
export const addCommentApi = async (payload) => {
    const response = await axios.post(`${BASE_URL}/api/boards/${payload.id}/comments/create`, payload.comment, {
      headers: {
        Authorization: accessToken,
        "Refresh-Token": refreshToken,
        "Content-Type": "application/json" // 이거 붙이면 400에러, 안 붙으면 415 에러
      }
    });
    return response.data
  };

  // export const getCommentApi = async (payload) => {
  //   console.log(payload)
  //   const response = await axios.get(`${BASE_URL}/commentList?boardId=${payload}`);  
  //   console.log("리스펀스데이타",response.data);
  //   return response.data;
  // };

  export const delCommentApi = async (payload) => {
    await axios.delete(`${BASE_URL}/api/boards/comments/delete/${payload.id}`);
  };

  export const editCommentApi = async (edit) => {
    await axios.put(`${BASE_URL}/commentList/${edit.id}`,edit);
  };