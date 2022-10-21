import { __getBoards } from "../Redux/modules/boardSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const List = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("데이터 패칭!");
    dispatch(__getBoards());
  }, [dispatch]);

  const { boards } = useSelector((state) => state.boards);
  console.log(boards);

  return(
    <div>
      <h2>{ boards[0]?.title }</h2>
      <p>{ boards[0]?.content }</p>
      <p>{ boards[0]?.createdAt }</p>
    </div>
  )
};

