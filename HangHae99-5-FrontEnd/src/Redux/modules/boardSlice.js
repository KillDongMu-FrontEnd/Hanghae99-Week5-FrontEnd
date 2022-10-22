import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import{postBoardApi, getBoardApi, delBoardApi, getBoardIdApi} from "./boardApi"


export const __postBoard = createAsyncThunk(
  "postBoard",
  async (payload, thunkAPI) => {
    await postBoardApi(payload);
    thunkAPI.dispatch(postBoard(payload));
  }
);

export const __getBoard = createAsyncThunk(
  "getBoard",
  async (payload, thunkAPI) => {
    const response = await getBoardApi(payload);
    thunkAPI.dispatch(getBoard(response));
  }
);
  
export const __delBoard = createAsyncThunk(
    "delBoard",
    async (payload, thunkAPI) => {
      await delBoardApi(payload);
      thunkAPI.dispatch(delBoard(payload));
    }
  );

export const __getBoardId = createAsyncThunk(
  "getBoard_Id",
  async (payload, thunkAPI) => {
    const response = await getBoardIdApi(payload);
    thunkAPI.dispatch(getBoard_Id(response));
  }
);

export const boardSlice = createSlice({
  name: "boards",
  initialState:{
      boards : [],
      board: {},
      isLoading: false,
      error: null,    
  },
  reducers: {
    postBoard: (state, action) => {
      const id = state.boards[state.boards.length - 1]?.id + 1 || 1;
      state.boards.push({ id, ...action.payload });
    },
    getBoard: (state, action) => {
      state.boards = action.payload;
    },
    delBoard: (state, action) => {
      state.boards = action.payload.filter((item)=>item.id !== action.payload);
    },
    getBoard_Id: (state, action) => {
      state.board = action.payload;
    },
  },
 
});

export const { postBoard, getBoard,delBoard,getBoard_Id} = boardSlice.actions;
export default boardSlice.reducer;