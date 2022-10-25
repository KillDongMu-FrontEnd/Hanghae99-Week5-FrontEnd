import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

export const addCommentApi = async (payload) => {
    await axios.post(`${BASE_URL}/commentList`, payload);
  };

  // export const getCommentApi = async (payload) => {
  //   console.log(payload)
  //   const response = await axios.get(`${BASE_URL}/commentList?boardId=${payload}`);  
  //   console.log("리스펀스데이타",response.data);
  //   return response.data;
  // };

  export const delCommentApi = async (comment) => {
    await axios.delete(`${BASE_URL}/api/boards/comments/delete/${comment.id}`);
  };

  export const editCommentApi = async (edit) => {
    await axios.put(`${BASE_URL}/commentList/${edit.id}`,edit);
  };