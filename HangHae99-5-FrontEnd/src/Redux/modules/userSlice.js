import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postUserApi } from "./API/userAPI";

export const __postUser = createAsyncThunk(
  "registUser",
  async (payload, thunkAPI) => {
    try{
      await postUserApi(payload);
      return thunkAPI.fulfillWithValue(payload); //안되면 .data로 수정
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);


export const userSlice = createSlice({
  name: "users",
  initialState: {
    userInfo: {},
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   postUser: (state, action) => {
  //     state.users.push(action.payload)
  //   }
  // },
  extraReducers: {
    [__postUser.pending]: (state) => [
      state.isLoading = true,
    ],
    [__postUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
      console.log(state.userInfo)
    },
    [__postUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

export const { postUser } = userSlice.actions;
export default userSlice.reducer;