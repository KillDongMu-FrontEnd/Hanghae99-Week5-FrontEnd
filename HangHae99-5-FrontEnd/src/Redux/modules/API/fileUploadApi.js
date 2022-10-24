import axios from "axios";


const instance = axios.create({
    BASE_URL: process.env.REACT_APP_SERVER,
});

instance.interceptors.request.use(config => {
    config.headers["Content-Type"] = "multipart/form-data";
    return config;
});
export const fileUploadApi = data => {
    console.log(data);
    instance.post("/file", data);
};
