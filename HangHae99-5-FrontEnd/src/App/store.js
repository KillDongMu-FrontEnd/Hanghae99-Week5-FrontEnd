import { configureStore } from "@reduxjs/toolkit";
import { boardSlice } from "../Redux/modules/boardSlice";
import { commentSlice } from "../Redux/modules/commentSlice";
import { userSlice } from "../Redux/modules/userSlice";
import { loginSlice } from "../Redux/modules/loginSlice"
import { mypageSlice } from "../Redux/modules/mypageSlice";

// import { fileUploadApi } from "../Redux/modules/API/fileUploadApi";
// import { authSlice } from "../Redux/modules/auth"s

export const store = configureStore({
  reducer: {
    boards: boardSlice.reducer,
    comments: commentSlice.reducer,
    users: userSlice.reducer,
    login: loginSlice.reducer,
    mypage :mypageSlice.reducer
    // files: fileUploadApi.reducer,
  },
});
