import { __getBoard } from "../../Redux/modules/boardSlice";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { StNoBoard, MainContainer, CardColumn, Card, CardBorder, CardInfo, CardDate, LodingContainer } from "./List.styled";
import ReactLoading from "react-loading";


export const List = () => {

  // Infinity Scroll
  const [page, setPage] = useState(1);
  const preventRef = useRef(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getBoard());
  }, [dispatch]);

  // 불러오기
  const boards = useSelector((state) => state?.boards?.boards);
  console.log("게시물 리스트임", boards);

  // 백엔드가 n개 만큼만 데이터를 보내줌 
  // -> post요청이 되면[scroll이 바닥에 닿을 때] 
  // -> n개 보내줌
  // -> post요청이 되면[scroll이 바닥에 닿을 때] 
  // -> n개 보내줌
  // -> ...
  // 쁠러스 알파
  // 

  // 만약 데이터가없다면 화면에 띄워줄 메시지
  if (boards.length === 0) {
    return(
      <StNoBoard>
        <h1>아직 생성한 게시물이 없습니다. 소중한 의견을 남겨주세요.</h1>
        <Link to="/form">글 작성하러 가기</Link>
        <LodingContainer><ReactLoading type="spin" color="#ff4444"/></LodingContainer>
      </StNoBoard>
    ) 
  };

  return(
    <>
      <MainContainer>
        {
          boards?.map((board) => {
            return (
              <CardColumn 
                key={ board.boardId }
                onClick={() => {
                  navigate(`/api/boards/detail/${board.boardId}`)
                }}
              >
                <Card>
                  <CardBorder/>
                  <CardInfo>
                    <p>좋아요 갯수임: { board.countHeart }</p>
                    <p>댓글 갯수임: { board.countComment }</p>
                  </CardInfo>
                  <img src="https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c48f324a0b9c48f77dbce3a43bd11ce785" alt="test"/>
                  <h1>{ JSON.stringify(board.title)}</h1>
                  <CardDate>{ board.createdAt.substr(0,10) }</CardDate>
                </Card>
              </CardColumn>
            )
          })
        }
        {/* {
          loading ?
            <LodingContainer>
              <ReactLoading type="spin" color="#ff4444"/>
            </LodingContainer> :
            null
        } */}
      </MainContainer>
    </>
  )
};

