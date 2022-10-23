import { __getBoard, __delBoard } from "../Redux/modules/boardSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const List = () => {

  const dispatch = useDispatch();
//리스트 첫 진입할때 겟보드 청크 디스패치보내기
  useEffect(() => {
    dispatch(__getBoard());
  }, [dispatch]);

  //슬라이드 불러오기
  const boards = useSelector((state) => state.boards.boards);

//만약 데이터가없다면 화면에 로딩중
  if (boards.length === 0) {
    return(
      <div>
      <h1>아직생성한 게시물이 없습니다. 소중한 의견을 남겨주세요.</h1>
      </div>
    ) 
    
  };

  return(
    <div>
      {
        boards?.map((board) => {
          return(
            <div key={board.id }>
              <h2>{ board.title }</h2>
              <p>{ board.createdAt }</p>
              <Link to={`/detail/${board.id}`}>상세보기</Link>
              <button onClick={(e)=>{
                e.preventDefault();
                dispatch(__delBoard(board.id));
                dispatch(__getBoard());
              }}>삭제하기</button>
              <hr/>
            </div>
          )
        })
      }
    </div>
  )
};