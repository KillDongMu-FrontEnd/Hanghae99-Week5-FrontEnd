import { __getBoard, __delBoard } from "../Redux/modules/boardSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const List = () => {

  const dispatch = useDispatch();
//리스트 첫 진입할때 겟보드 청크 디스패치보내기
  useEffect(() => {
    dispatch(__getBoard());
  }, [dispatch]);

  const navigate = useNavigate();

  //슬라이드 불러오기
  const boards = useSelector((state) => state.boards.boards);
  console.log(boards);

  return(
    <CardContainer>
      {
        boards?.map((board) => {
          return(
            <CardItem onClick={() => {
              navigate(`/detail/${board.id}`)
            }}>
              <CardItemTitle>{ board.title }</CardItemTitle>
              <p>{ board.createdAt }</p>
              <button onClick={(e)=>{
                e.preventDefault();
                dispatch(__delBoard(board.id));
                dispatch(__getBoard());
              }}>삭제하기</button>
            </CardItem>
          )
        })
      }
    </CardContainer>
  )
};

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  grid-gap: 2rem;
  margin: 2rem;
  width: 80%;
  background: #b5b5ed;
  float: right;
  margin: 0;
  box-sizing: border-box;
  border-radius: 8px;
`

const CardItem = styled.div`
  display: grid;
  height: 15rem;
  width: 15rem;
  position: relative;
  overflow: hidden;
  margin: 20px;
  border-radius: 8px;
  background: #ff4444;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  grid-template-rows: 1fr 1fr;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
  &:hover {
    transform: scale(1.035, 1.035);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  }
`

const CardItemTitle = styled.h2`
  text-align: center;
  padding: 10px;
`