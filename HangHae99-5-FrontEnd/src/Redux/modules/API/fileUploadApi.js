import axios from "axios";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// const instance = axios.create({
//     BASE_URL: process.env.REACT_APP_SERVER,
// });

// instance.interceptors.request.use(config => {
//     config.headers["Content-Type"] = "multipart/form-data";
//     return config;
// });
// export const fileUploadApi = data => {

//     console.log(data);

//     instance.post("/file", data);
// };

// export const __addFiles = createAsyncThunk(
//     "fileUpload", 
//     async (payload, thunkAPI) => {
//         await axios.post("http://localhost:3001/file", payload);
//         console.log("페이로드", payload.substr(5))
       
//         return thunkAPI.fulfillWithValue(payload);
    //   try {
    //     console.log("페이로드 ", payload);

    //   } 
    //   catch ( error) {
    //     console.log("에러", error);
    //     return thunkAPI.rejectWithValue(error.message);
    //   }
//     }
// )

const fileSlice = createSlice({
    name: "file",
    initialState: {
        file: null,
        isDone: false,
        error: null
    },
    reducers:(state,action) => {
      state.file = action.payload
    },
    extraReducers: {
        // [__addFiles.fulfilled]: (state, action) => {
        //     console.log("액션 페이로드 ", action.payload);
        //     state.isDone = true;
        //     state.file = action.payload
        // },
        // [__addFiles.rejected]: (state, action) => {
        //     console.log("에러 액션 페이로드", action.payload);
        //     state.error = action.payload;
        // }
    }
})

export default fileSlice.reducer;