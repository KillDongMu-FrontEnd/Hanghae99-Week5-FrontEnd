import { configureStore } from "@reduxjs/toolkit";
import { boardSlice } from "../Redux/modules/boardSlice";
import { userSlice } from "../Redux/modules/userSlice";

export const store = configureStore({
  reducer: {
    boards: boardSlice.reducer,
    users: userSlice.reducer,
  },
});