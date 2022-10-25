import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardId } from "../../Redux/modules/boardSlice";
import { useNavigate, useParams } from "react-router-dom";
import { __editBoard } from "../../Redux/modules/boardSlice"
import { BsHeartFill, BsHeart, BsChatLeftText, BsThreeDots } from "react-icons/bs";
import { DetailContainer, DetailHeader, DetailAuthor, DetailContent, DetailText, DetailInfo, DetailFloatingBtn } from "./Detail.styled";
import styled from "styled-components";


export const Detail = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boardData = useSelector((state) => state.boards.board);
  const { id } = useParams();
  const [edit, setEdit] = useState();
  const [board, setBoard] = useState(false);

  // useEffect(() => {
  //   dispatch(__getBoardId(id));
  // }, [dispatch, id]);

  // const onChangeHandler = (e) =>{
  //   e.preventDefault();
  //   const {name, value} = e.target;   
  //   setEdit({...edit, [name]: value });
  // };

  // useEffect(()=>{
  //   setEdit(boardData);
  // },[boardData]);


  return (
    <DetailContainer>
      <DetailHeader>
        <h1><strong>제목임 제목임 제목임 제목임 제목임</strong></h1>
        <DetailAuthor>글쓴이</DetailAuthor>
      </DetailHeader>

      <DetailContent>
        <h1>
          여기에 이미지?<br/>
          여기에 이미지?<br/>
          여기에 이미지?<br/>
          여기에 이미지?<br/>
        </h1>
        <hr/>
        <DetailText>
          <p>
            무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호
            무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호
            무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호
            무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호 무야호
          </p>
        </DetailText>
        <DetailInfo>
          <p>2022-10-25</p>
          <div>
            <DetailBsThreeDots/>
            <DetailBsHeart/>
            <DetailBsChatLeftText/>
          </div>
        </DetailInfo>
      </DetailContent>

      <DetailFloatingBtn onClick={() => {
        navigate("/")
      }}>뒤로 가기</DetailFloatingBtn>

    </DetailContainer>
  );
};

export const DetailBsHeart = styled(BsHeart)`
  color: #ff4444;
  font-size: 1.2rem;
  margin-right: 1.5rem;
`

export const DetailBsChatLeftText = styled(BsChatLeftText)`
  color: black;
  font-size: 1.3rem;

`

export const DetailBsThreeDots = styled(BsThreeDots)`
  color: black;
  font-size: 1.3rem;
  margin-right: 1.5rem;
`