import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import{getBoardApi, delBoardApi, getBoardIdApi, editBoardApi,countHeartApi } from "./API/boardApi"
import axios from "axios";



// const BASE_URL = "REACT_APP_SERVER";

//폼데이터로 변환하여 서버에 전송하기
// const register = (payload) => {

//   //토큰은 로컬스토리지에 전달하기
//   const accessToken = localStorage.getItem("Authorization");
//   const refreshToken = localStorage.getItem("refreshToken");

//   //인풋데이터들 폼데이터로 변환하기
//   const formdata = new FormData();
//   formdata.append("title", payload.title);
//   formdata.append("content", payload.content);
//   formdata.append("file", payload.file);

//   //폼데이터 콘솔보기
//   for(let pair of formdata.entries()){
//     console.log(pair[0]+','+pair[1]+','+pair[2]);
//   }
// //폼데이터 통신보내기 폼데이터 형식지정하고 헤더에 토큰도 같이 보내기
//   axios
//     .post("http://13.125.92.237:8080/api/boards/create", formdata, {
//       headers: {
//         Authorization: accessToken,
//         "Refresh-Token": refreshToken,
//         "content-type": "multipart/form-data",
//       },
//     })
//     .then(function a(response) {
//       alert("게시되었습니다.");
//       window.location.replace("/");
//     })
//     .catch(function (error) {
//       console.log(error.response);
//     });
// };

// export const __postBoard = createAsyncThunk(
//   "postBoard",
//   async (payload, thunkAPI) => {
//     try {
//       const response = await postBoardApi(payload);      
//       return thunkAPI.fulfillWithValue(response);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );


export const __getBoard = createAsyncThunk(
  "getBoard",
  async (payload, thunkAPI) => {
    try{
      const response = await getBoardApi(payload);
      // console.log(response);
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
        await countHeartApi(payload);
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
   

    //GET Request My page Item
    // [__getMyPageId.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__getMyPageId.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.board = action.payload;
    // },
    // [__getMyPageId.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    // POST Request board Item
    // [__postBoard.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__postBoard.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.boards.push(action.payload);
    // },
    // [__postBoard.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

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