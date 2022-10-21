import axios from "axios";

const instance = axios.create({
  baseURL : process.env.REACT_APP_SERVER,
});

export const getBoardApi = async() => {
  const response = await instance.get("/boards");
  return response.data;
};