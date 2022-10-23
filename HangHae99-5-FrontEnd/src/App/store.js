import { configureStore } from "@reduxjs/toolkit";
import { boardSlice } from "../Redux/modules/boardSlice";
import  {commentSlice} from "../Redux/modules/commentSlice";

export const store = configureStore({
  reducer: {
    boards: boardSlice.reducer,
    comments: commentSlice.reducer,
    //엑스트라리듀서를 쓸때는 boardSlice.reducer 붙여줘야함
  },
});
