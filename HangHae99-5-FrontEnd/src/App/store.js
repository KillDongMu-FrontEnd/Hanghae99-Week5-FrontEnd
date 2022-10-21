import { configureStore } from "@reduxjs/toolkit";
import { boardSlice } from "../Redux/modules/boardSlice";

export const store = configureStore({
  reducer: {
    boards: boardSlice.reducer,
  },
});
