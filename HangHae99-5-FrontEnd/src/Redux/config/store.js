import { configureStore } from "@reduxjs/toolkit";
import { boardSlice } from "../modules/boardSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    boards: boardSlice.reducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  },
});
