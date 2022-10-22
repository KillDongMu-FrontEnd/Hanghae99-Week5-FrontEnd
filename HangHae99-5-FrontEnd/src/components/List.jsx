import { __getBoardList, __deleteBoard } from "../Redux/modules/boardSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const List = () => {

  const dispatch = useDispatch();

  useEffect(() => {
<<<<<<< HEAD
    dispatch(__getBoards());
=======
    dispatch(__getBoardList());
>>>>>>> 6edfefdf43f89a5ca4a89b6f4849e2e3dd71c8b2
  }, [dispatch]);

  const { boards } = useSelector((state) => state.boards);


  if (boards.length === 0) {
    console.log("로딩 중");
    return <h1>Loading...</h1>
  }

  return(
    <div>
      {
<<<<<<< HEAD
        boards?.map((item)=>{
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
              <p>{item.createdAt}</p>              
=======
        boards?.map((board) => {
          return(
            <div key={ board.board_id }>
              <h2>{ board.title }</h2>
              <p>{ board.createdAt }</p>
              <Link to="/detail">상세보기</Link>
              <button onClick={() => {
                dispatch(__deleteBoard(board.board_id))
              }}>삭제하기</button>
              <hr/>
>>>>>>> 6edfefdf43f89a5ca4a89b6f4849e2e3dd71c8b2
            </div>
          )
        })
      }
    </div>
  )
};