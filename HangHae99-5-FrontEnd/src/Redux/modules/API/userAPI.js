import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER

export const postUserApi = async (payload) => {
  console.log(payload);
  await axios.post(`${BASE_URL}/api/members/signup`, payload);
};

export const loginApi = async (payload) => {
  console.log(payload);
  await axios.post(`${BASE_URL}/api/members/login`, payload);
}