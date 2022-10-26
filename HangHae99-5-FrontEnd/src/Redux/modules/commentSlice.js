import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCommentApi, getCommentApi, delCommentApi, editCommentApi } from "./API/commentApi";

export const __addComment = createAsyncThunk(
    "addComment",
    async (payload, thunkAPI) => {
      try{
        const response = await addCommentApi(payload);
        return thunkAPI.fulfillWithValue(response);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const __getComment = createAsyncThunk(
    "getComment",
    async (payload, thunkAPI) => {
      try{
        const response = await getCommentApi(payload);
        return thunkAPI.fulfillWithValue(response);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const __delComment = createAsyncThunk(
    "delComment",
    async (payload, thunkAPI) => {
      try {
        await delCommentApi(payload);
        thunkAPI.fulfillWithValue(payload);
      } catch (error) {
        return thunkAPI.rejectWithValue(error)
      }
    }
  );
  
  export const __editComment = createAsyncThunk(
    "editComment",
    async (payload, thunkAPI) => {    
      await editCommentApi(payload);    
      thunkAPI.dispatch(editComment(payload));
    }
  );


  export const commentSlice = createSlice({
    name: "comments",
    initialState: {
      comment: [],
      isLoading: false,
      error: null, 
    },
    reducers: {
    //   delComment: (state, action) => {
    //     state.comment = state.comment.filter((item) => 
    //       item.id !== action.payload.id
    //     )
    //   },  
    //   editComment: (state, action) => {
    //     state.comment = state.comment.map((item)=>{
    //       return item.id === action.payload.id ? action.payload : item;
    //     })     
    //   },
    },
    extraReducers: {
      // POST Request Comment
      [__addComment.pending]: (state) => {
        state.isLoading = true;
      },
      [__addComment.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.comment.push(action.payload);
      },
      [__addComment.rejectWithValue]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
      [__delComment.pending]: (state) => {
        state.isLoading = true;
      },
      [__delComment.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.comment = state.comment.filter((item) => 
        item.id !== action.payload)
      },
      [__delComment.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    }
  });
  
  export const { addComment, getComment, delComment, editComment } = commentSlice.actions;
  
  export default commentSlice.reducer;
