import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import{postBoardApi, getBoardApi, delBoardApi, getBoardIdApi, editBoardApi} from "./boardApi"


const initialState = {
  boards : [],
  board: {},
  isLoading: false,
  error: null,    
}

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


export const __editBoard = createAsyncThunk(
  "editBoard",
  async (payload, thunkAPI) => {
    const response = await editBoardApi(payload);
    thunkAPI.dispatch(editBoard(response));
  }
);

export const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    postBoard: (state, action) => {
      const id = state.boards[state.boards.length - 1]?.id + 1 || 1;
      state.boards.push({ id, ...action.payload });
    },
    getBoard: (state, action) => {
      state.boards = action.payload;
    },
    delBoard: (state, action) => {
      state.boards = action.payload.filter((item)=>item?.id !== action.payload);
    },
    getBoard_Id: (state, action) => {
      state.board = action.payload;
    },
    editBoard: (state, action) => {
      state.boards = state.boards.map((board)=>{
        return board.id === action.payload.id ? action.payload : board
      })
    },
  },
});

export const { postBoard, getBoard,delBoard,getBoard_Id,editBoard} = boardSlice.actions;
export default boardSlice.reducer;