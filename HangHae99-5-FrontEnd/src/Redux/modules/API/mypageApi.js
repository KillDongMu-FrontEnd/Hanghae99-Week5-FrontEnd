import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;
// const accessToken = localStorage.getItem("authorization");
// const refreshToken = localStorage.getItem("refreshToken");

export const getMyPageIdApi = async (username) => {
    console.log(username)
    const response = await axios.get(`${BASE_URL}/api/mypage/${username}`);  
    console.log(response)
    return response.data;
  };