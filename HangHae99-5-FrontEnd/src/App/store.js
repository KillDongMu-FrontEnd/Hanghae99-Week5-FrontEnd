import { configureStore } from "@reduxjs/toolkit";
import { boardSlice } from "../Redux/modules/boardSlice";

export const store = configureStore({
  reducer: {
    boards: boardSlice.reducer,
    //엑스트라리듀서를 쓸때는 boardSlice.reducer 붙여줘야함
  },
});