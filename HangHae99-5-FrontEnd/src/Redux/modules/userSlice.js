import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postUserApi } from "./API/userAPI";

export const __postUser = createAsyncThunk(
  "registUser",
  async (payload, thunkAPI) => {
    try {
      await postUserApi(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState: {
    userInfo: [],
    // isLoading: false,
    // error: null,
  },
  reducers: {},
  extraReducers: {
    [__postUser.fulfilled]: (state, action) => {
      state.userInfo.push(action.payload)
    }
  }
})

export const { postUser } = userSlice.actions;
export default userSlice.reducer;