import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import{postBoardApi, getBoardApi, delBoardApi, getBoardIdApi, editBoardApi} from "./API/boardApi"


export const __postBoard = createAsyncThunk(
  "postBoard",
  async (payload, thunkAPI) => {
    try {
      await postBoardApi(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getBoard = createAsyncThunk(
  "getBoard",
  async (payload, thunkAPI) => {
    try{
      const response = await getBoardApi(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
  
export const __delBoard = createAsyncThunk(
    "delBoard",
    async (payload, thunkAPI) => {
      try{
        await delBoardApi(payload);
        return thunkAPI.fulfillWithValue(payload);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

export const __getBoardId = createAsyncThunk(
  "getBoard_Id",
  async (payload, thunkAPI) => {
    try {
      const response = await getBoardIdApi(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editBoard = createAsyncThunk(
  "editBoard",
  async (payload, thunkAPI) => {
    try {
      const response = await editBoardApi(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
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
  reducers: {},
  extraReducers:{
    // GET Request BoardList
    [__getBoard.pending]: (state) => {
      state.isLoading = true;
    },
    [__getBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boards = action.payload;
    },
    [__getBoard.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET Request one board Item
    [__getBoardId.pending]: (state) => {
      state.isLoading = true;
    },
    [__getBoardId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.board = action.payload;
    },
    [__getBoardId.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // POST Request board Item
    [__postBoard.pending]: (state) => {
      state.isLoading = true;
    },
    [__postBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boards.push(action.payload);
    },
    [__postBoard.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // DELETE Request board Item
    [__delBoard.pending]: (state) => {
      state.isLoading = true;
    },
    [__delBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boards = action.payload;
    },
    [__delBoard.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // EDIT Request board Item
    [__editBoard.pending]: (state) => {
      state.isLoading = true;
    },
    [__editBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boards = state.boards.map((board)=>{
        return board.id === action.payload.id ? action.payload : board
      });
    },
    [__editBoard.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

// export const { postBoard, getBoard,delBoard,getBoard_Id,editBoard } = boardSlice.actions;
export default boardSlice.reducer;