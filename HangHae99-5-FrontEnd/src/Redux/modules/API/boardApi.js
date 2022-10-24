import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER

export const postBoardApi = async (payload) => {
    await axios.post(`${BASE_URL}/api/boards/create`, payload);
  };

  export const getBoardApi = async () => {
    const response = await axios.get(`${BASE_URL}/api/boards/list`); 
    console.log(response.data) 
    return response.data;
  };

  export const delBoardApi = async (id) => {
    await axios.delete(`${BASE_URL}/boardList/${id}`);
  };

  export const getBoardIdApi = async (id) => {
    const response = await axios.get(`${BASE_URL}/boardList?id=${id}`);  
    return response.data[0];
  };

  export const editBoardApi = async (edit) => {
    await axios.put(`${BASE_URL}/boardList/${edit.id}`,edit);
  };