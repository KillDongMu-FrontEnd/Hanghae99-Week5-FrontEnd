import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;
const accessToken = localStorage.getItem("authorization");

export const getMyPageIdApi = async (username) => {
    const response = await axios.get(`${BASE_URL}/api/mypage/${username}`,{
      headers:{
        Authorization: accessToken,
      }
    });  
    return response.data;
  };