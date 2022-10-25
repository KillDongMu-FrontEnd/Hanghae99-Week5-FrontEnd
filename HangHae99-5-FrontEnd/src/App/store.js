import { configureStore } from "@reduxjs/toolkit";
import { boardSlice } from "../Redux/modules/boardSlice";
import { commentSlice } from "../Redux/modules/commentSlice";
import { userSlice } from "../Redux/modules/userSlice";
import { loginSlice } from "../Redux/modules/loginSlice"

// import { authSlice } from "../Redux/modules/auth"

export const store = configureStore({
  reducer: {
    boards: boardSlice.reducer,
    comments: commentSlice.reducer,
    users: userSlice.reducer,
    login: loginSlice.reducer,
    // files: fileUploadApi.reducer,
  },
});
