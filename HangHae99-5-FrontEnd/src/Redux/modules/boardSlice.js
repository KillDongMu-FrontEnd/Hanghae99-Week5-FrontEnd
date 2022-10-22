import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER

// Set InitialState
const initialState = {
  boards : [],
  isLoading: false,
  error: null,
};

// GET Boards Data
export const __getBoardList = createAsyncThunk(
  "getBoardList",
  async (payload, thunkAPI) => {
    try {
      const boardList = await axios.get(`${BASE_URL}/boardList`);
      console.log("불러옴")
      return thunkAPI.fulfillWithValue(boardList.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// POST Board
export const __postBoard = createAsyncThunk(
  "postBoard",
  (payload, thunkAPI) => {
    console.log(payload);
    try {
      axios.post(`${BASE_URL}/boardList`, payload);
      return thunkAPI.fulfillWithValue("asd");
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);

// DELETE Board
export const __deleteBoard = createAsyncThunk(
  "deleteBoard",
  async (payload, thunkAPI) => {
    try{
      await axios.delete(`${BASE_URL}/boardList?board_id=${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  } 
);

export const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
  extraReducers: { // thunk함수는 외부에서 작성한 것이므로 extraReducers를 사용
    // 서버에서 가져오는 데이터를 [로딩, 성공, 실패]로 나누어 상태를 관리
    // 즉, 상태값에 따른 렌더링이 가능함

    // GET Boards Data Reducer
    [__getBoardList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getBoardList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boards = action.payload;
    },
    [__getBoardList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // POST Boards Data Reducer
    [__postBoard.pending]: (state) => {
      state.isLoading = true;
    },
    [__postBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log(action.payload);
      state.boards.push(action.payload);
    },
    [__postBoard.rejected]: (state, action) => {
      state.isLoading = false;
      // console.log(action.payload);
      state.error = action.payload;
    },

    // DELETE Board Date Reducer
    [__deleteBoard.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boards = state.boards.filter((item) => item.board_id !== action.payload);
    },
    [__deleteBoard.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export default boardSlice.reducer;