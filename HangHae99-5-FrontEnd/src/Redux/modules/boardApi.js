import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER

export const postBoardApi = async (payload) => {
    await axios.post(`${BASE_URL}/boardList`, payload);
  };

  export const getBoardApi = async () => {
    const response = await axios.get(`${BASE_URL}/boardList`);  
    return response.data;
  };

  export const delBoardApi = async (id) => {
    await axios.delete(`${BASE_URL}/boardList/${id}`);
  };

  export const getBoardIdApi = async (id) => {
    const response = await axios.get(`${BASE_URL}/boardList?id=${id}`);  
    return response.data[0];
  };