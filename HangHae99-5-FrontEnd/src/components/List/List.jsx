import { __getBoard, __delBoard } from "../../Redux/modules/boardSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MainContainer, LinkContainer, GoToForm, CardContainer, CardItem, CardItemTitle } from "./List.styled";
// import "./style.css"

export const List = () => {


  const dispatch = useDispatch();
//리스트 첫 진입할때 겟보드 청크 디스패치보내기
  useEffect(() => {
    dispatch(__getBoard());
  }, [dispatch]);

  const navigate = useNavigate();

  //슬라이드 불러오기
  const boards = useSelector((state) => state.boards.boards);
  // console.log(boards);

// 만약 데이터가없다면 화면에 띄워줄 메시지
  if (boards.length === 0) {
    return(
      <div>
        <h1>아직 생성한 게시물이 없습니다. 소중한 의견을 남겨주세요.</h1>
      </div>
    ) 
  };

  return(
    <MainContainer>
      <LinkContainer>
        <GoToForm to="/form">새로운 글 작성하기</GoToForm>
      </LinkContainer>
      <CardContainer>
        {
          boards?.map((board, idx) => {
            return(
              <CardItem 
              // 서버 연동하고나면, ID 값 넣어줄거임 (지엉님 몰래 쓰는거임 걸리면 혼남)
                key={idx}
                onClick={() => {
                  navigate(`/detail/${board.id}`)
              }}>
                <CardItemTitle>{ board.title }</CardItemTitle>
                <p>{ board.createdAt }</p>
                {/* <button onClick={(e)=>{
                  e.preventDefault();
                  dispatch(__delBoard(board.id));
                  dispatch(__getBoard());
                }}>삭제하기</button> */}
              </CardItem>
            )
          })
        }
      </CardContainer>
    </MainContainer>
  )
};