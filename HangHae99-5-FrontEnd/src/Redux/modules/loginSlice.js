import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "./API/userAPI";

export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      await loginApi(payload);
      console.log(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)


export const loginSlice = createSlice({
  name: "loginInfo",
  initialState: {
    loginInfo: [],
  },
  reducers: {
    // loginUser: (state, action) => {
    //   state.loginInfo.push(action.payload)
    // }
  },
  extraReducers: {
    [__loginUser.fulfilled]: (state, action) => {
      console.log("test")
      state.loginInfo.push(action.payload)
    }
  }
})

// export const { loginUser } = loginSlice.actions;
export default loginSlice.reducer;