import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

export const addCommentApi = async (payload) => {
    await axios.post(`${BASE_URL}/commentList`, payload);
  };

  export const getCommentApi = async (payload) => {
    const response = await axios.get(`${BASE_URL}/commentList?boardId=${payload}`);  
    return response.data;
  };

  export const delCommentApi = async (comment) => {
    await axios.delete(`${BASE_URL}/commentList/${comment.id}`);
  };

  export const editCommentApi = async (edit) => {
    await axios.put(`${BASE_URL}/commentList/${edit.id}`,edit);
  };