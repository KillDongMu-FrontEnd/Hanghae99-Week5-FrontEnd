import { __getBoardList, __deleteBoard } from "../Redux/modules/boardSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const List = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getBoardList());
  }, [dispatch]);

  const { boards } = useSelector((state) => state.boards);
  console.log(boards);

  if (boards.length === 0) {
    console.log("로딩 중");
    return <h1>Loading...</h1>
  }

  return(
    <div>
      {
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
            </div>
          )
        })
      }
    </div>
  )
};