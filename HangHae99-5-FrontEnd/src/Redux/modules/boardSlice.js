import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import{ getBoardApi, delBoardApi, getBoardIdApi, editBoardApi,countHeartApi } from "./API/boardApi"


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

  export const __countHeart = createAsyncThunk(
    "delBoard",
    async (payload, thunkAPI) => {
      try{
        const response = await countHeartApi(payload);
        window.location.reload();
        return thunkAPI.fulfillWithValue(response);
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

// export const __getMyPageId = createAsyncThunk(
//   "getMyPage_Id",
//   async (payload, thunkAPI) => {
//     try {
//       const response= await getMyPageIdApi(payload);
//       return thunkAPI.fulfillWithValue(response);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

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
      board: null,
      isLoading: false,
      pageCount: 1,
      error: null,
  },
  reducers: {
    //  // action => dispatch로 보낸 데이터를 받아오는 곳
    //  addPost: (state, action) => {
    //   console.log("리듀서", action.payload)
    //   state.board = action.payload;
    //   register(action.payload);
    // },
    // postBoard:(state, action) =>{
    //   state.boards.push(action.payload);
    // }
  },
  extraReducers:{
    // GET Request BoardList
    [__getBoard.pending]: (state) => {
      state.isLoading = true;
      state.isDone = false;
    },
    [__getBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isDone = true;
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

    // DELETE Request board Item
    [__delBoard.pending]: (state) => {
      state.isLoading = true;
    },
    [__delBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boards = state.boards.filter((item)=>
      item.id !== action.payload)
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
      console.log(action.payload);
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

export const { addPost } = boardSlice.actions;
export default boardSlice.reducer;