import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMyPageIdApi } from "./API/mypageApi"; 


export const __getMyPageId = createAsyncThunk(
    "getMyPage_Id",
    async (payload, thunkAPI) => {
      try {
        const response= await getMyPageIdApi(payload);
        return thunkAPI.fulfillWithValue(response);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  
  export const mypageSlice = createSlice({
    name: "mypage",
    initialState:{
        mypage : [],
    },
    reducers: { },
    extraReducers:{      
  
      //GET Request My page Item
      [__getMyPageId.pending]: (state) => {
        state.isLoading = true;
      },
      [__getMyPageId.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.mypage = action.payload;
      },
      [__getMyPageId.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },

    }
  });

  export default mypageSlice.reducer;