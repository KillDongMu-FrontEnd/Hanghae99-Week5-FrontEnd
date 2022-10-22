import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import{ postBoardApi, getBoardApi, delBoardApi, getBoardIdApi, editBoardApi } from "./boardApi"


const initialState = {
  boards : [],
  board: {},
  isLoading: false,
  error: null,
}

export const __postBoard = createAsyncThunk(
  "postBoard",
  async (payload, thunkAPI) => {
    try{
      await postBoardApi(payload);
      return thunkAPI.dispatch(postBoard(payload))
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getBoard = createAsyncThunk(
  "getBoard",
  async (payload, thunkAPI) => {
    const response = await axios.get(`http://localhost:3001/boardList`);
    return thunkAPI.fulfillWithValue(response.data);
  }
);
  
export const __delBoard = createAsyncThunk(
  "delBoard",
  async (payload, thunkAPI) => {
    await delBoardApi(payload);
    return thunkAPI.fulfillWithValue(payload);
  }
);

export const __getBoardId = createAsyncThunk(
  "getBoard_Id",
  async (payload, thunkAPI) => {
    const response = await getBoardIdApi(`http://localhost:3001/boardList/${payload}`);
    return thunkAPI.fulfillWithValue(response.data);
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
    // postBoard: (state, action) => {
    //   const id = state.boards[state.boards.length - 1]?.id + 1 || 1;
    //   state.boards.push({ id, ...action.payload });
    // },
    // getBoard: (state, action) => {
    //   state.boards = action.payload;
    // },
    // delBoard: (state, action) => {
    //   state.boards = action.payload.filter((item)=>item.id !== action.payload);
    // },
    // getBoard_Id: (state, action) => {
    //   state.board = action.payload;
    // },
    // editBoard: (state, action) => {
    //   state.boards = state.boards.map((board)=>{
    //     return board.id === action.payload.id ? action.payload : board
    //   })
    // },
  },
  extraReducers: {
    // GET request Reducers
    [__getBoard.pending]: (state) => {
      state.isLoading = true;
    },
    [__getBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boards = action.payload;
    },
    [__getBoard.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;;
    },

    // GET One BoardItem request Reducers
    [__getBoardId.pending]: (state) => {
      state.isLoading = true;
    },
    [__getBoardId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.board = action.payload;
    },
    [__getBoardId.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;;
    },

    // POST request Reducers
    [__postBoard.pending]: (state) => {
      state.isLoading = true;
    },
    [__postBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boards = state.boards.push(action.payload);
    },
    [__postBoard.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    },

    // DELETE request Reducers
    [__delBoard.pending]: (state) => {
      state.isLoading = true;
    },
    [__delBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boards = action.payload.filter((item)=>item.id !== action.payload);
    },
    [__delBoard.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    },

    // EDIT BoardItem request Reducers
    [__editBoard.pending]: (state) => {
      state.isLoading = true;
    },
    [__editBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boards = state.boards.map((board)=>{
        return board.id === action.payload.id ? action.payload : board
      })
    },
    [__editBoard.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const { postBoard, getBoard, delBoard, getBoard_Id, editBoard } = boardSlice.actions;
export default boardSlice.reducer;