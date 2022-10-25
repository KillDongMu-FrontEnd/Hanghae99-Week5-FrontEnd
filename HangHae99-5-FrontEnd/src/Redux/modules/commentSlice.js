import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCommentApi, getCommentApi, delCommentApi, editCommentApi } from "./API/commentApi";

export const __addComment = createAsyncThunk(
    "addComment",
    async (payload, thunkAPI) => {
      try{
        await addCommentApi(payload);
        return thunkAPI.fulfillWithValue(payload);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  // export const __getComment = createAsyncThunk(
  //   "getComment",
  //   async (payload, thunkAPI) => {
  //     try{
  //       const response = await getCommentApi(payload);
  //       return thunkAPI.fulfillWithValue(response);
  //     } catch (error) {
  //       return thunkAPI.rejectWithValue(error);
  //     }
  //   }
  // );

  export const __delComment = createAsyncThunk(
    "delComment",
    async (payload, thunkAPI) => {
      await delCommentApi(payload);
      thunkAPI.dispatch(delComment(payload));
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
      // GET Request Comment
      // [__getComment.pending]: (state) => {
      //   state.isLoading = true;
      // },
      // [__getComment.fulfilled]: (state, action) => {
      //   state.isLoading = false;
      //   state.comment = action.payload;
      // },
      // [__getComment.rejected]: (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // },

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
      }
    }
    // extraReducers: {
    //     [__getComment.fulfilled]: (state, action) => {
    //     state.isLoading = false;
    //     state.comment = action.payload;
    //     console.log("엑스트랴리듀서")
    //     },
    //     [__getComment.rejected]: (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //     },
    //     [__getComment.pending]: (state) => {
    //     state.isLoading = true;
    //     },


    //     [__addTodoThunk.pending]: (state) => {
    //     state.isSuccess = false;
    //     state.isLoading = true;
    //     },
    //     [__addTodoThunk.fulfilled]: (state, action) => {
    //     state.isSuccess = true;
    //     state.isLoading = false;
    //     state.todos.push(action.payload);
    //     },
    //     [__addTodoThunk.rejected]: (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //     },
        
    //     [__deleteTodoThunk.fulfilled]: (state, action) => {
    //     const target = state.todos.findIndex(
    //     (comment) => comment.id === action.payload
    //     );
        
    //     state.todos.splice(target, 1);
    //     },
    //     [__deleteTodoThunk.rejected]: () => {},
    //     [__deleteTodoThunk.pending]: () => {},
    //     },
  });
  
  export const { addComment, getComment, delComment, editComment } = commentSlice.actions;
  
  export default commentSlice.reducer;
