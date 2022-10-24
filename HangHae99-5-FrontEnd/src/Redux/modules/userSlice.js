import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postUserApi, loginApi } from "./API/userAPI";

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

export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkAPI) => {
    try {
      await loginApi(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)


export const userSlice = createSlice({
  name: "users",
  initialState: {
    userInfo: [],
    // isLoading: false,
    // error: null,
  },
  reducers: {
    postUser: (state, action) => {
      console.log("plz")
      console.log(action.payload)
      state.userInfo.push(action.payload)
    }
  },
  extraReducers: {
    // POST Request Register
    // [__postUser.pending]: (state) => [
    //   state.isLoading = true,
    // ],
    // [__postUser.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   console.log("fulfilled");
    //   console.log("fulfilled", action.payload);
    //   state.userInfo.push(action.payload);
    // },
    // [__postUser.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    // POST Request Login
    // [__loginUser.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__loginUser.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.userInfo.push(action.payload);
    // },
    // [__loginUser.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // }
  }
})

export const { postUser } = userSlice.actions;
export default userSlice.reducer;