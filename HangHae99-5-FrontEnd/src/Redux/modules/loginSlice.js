import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "./API/userAPI";

export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkAPI) => {
    try {
      const response = await loginApi(payload);
      localStorage.setItem("authorization", response.headers.authorization);
      localStorage.setItem("refreshToken", response.headers.refreshtoken);
      localStorage.setItem("username", response.headers.username);
      localStorage.setItem("isLogin", true);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginSlice = createSlice({
  name: "loginInfo",
  initialState: {
    loginInfo: [],
  },
  reducers: {},
  extraReducers: {
    [__loginUser.fulfilled]: (state, action) => {
      state.loginInfo.push(action.payload)
    }
  }
});

export default loginSlice.reducer;