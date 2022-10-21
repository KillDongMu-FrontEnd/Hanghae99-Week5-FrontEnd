import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { getBoardApi } from "../API/api";

const BASE_URL = process.env.REACT_APP_SERVER

// Set InitialState
const initialState = {
  boards : [],
  isLoading: false,
  error: null,
};

// GET Boards Data
export const __getBoards = createAsyncThunk(
  "boards/getBoards",
  async (payload, thunkAPI) => {
    try {
      const boards = await axios.get(`${BASE_URL}/boards`);
      return thunkAPI.fulfillWithValue(boards.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
  extraReducers: {
    // GET Boards Data Reducer
    [__getBoards.pending]: (state) => {
      state.isLoading = true;
    },
    [__getBoards.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boards = action.payload;
    },
    [__getBoards.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
})