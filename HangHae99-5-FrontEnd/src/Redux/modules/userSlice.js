import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postUserApi } from "./API/userAPI";

// const today = new Date();
// const year = today.getFullYear();
// const month = today.getMonth() + 1;
// const day = today.getDate();

export const __postUser = createAsyncThunk(
  "registUser",
  async (payload, thunkAPI) => {
    await postUserApi(payload);
    thunkAPI.dispatch(postUser(payload));
    console.log(payload)
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState: {
    username: "",
    password: "",
    email: "",
  },
  reducers: {
    postUser: (state, action) => {
      state.users.push(action.payload)
    }
  }
})

export const { postUser } = userSlice.actions;
export default userSlice.reducer;