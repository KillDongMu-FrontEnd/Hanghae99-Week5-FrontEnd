import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "./API/userAPI";

export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkAPI) => {
    try {
      const response = await loginApi(payload);
      console.log(response)
      // localStorage.setItem("authorization", response.headers.Authorization);
      // localStorage.setItem("refreshToken", response.headers.RefreshToken);
      // localStorage.setItem("username", response.headers.username);
      // localStorage.setItem("isLogin", true);
      console.log(response.headers)
      const test = response.headers.get("Authorization");
      console.log(test);
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

// export const { loginUser } = loginSlice.actions;
export default loginSlice.reducer;