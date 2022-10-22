import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardId } from "../../Redux/modules/boardSlice";
import { useNavigate, useParams } from "react-router-dom";
import { __editBoard } from "../../Redux/modules/boardSlice"

import styled from "styled-components";

export const Detail = () => {
  const boardData = useSelector((state) => state.boards.board);
  const { id } = useParams();
  const [edit, setEdit] = useState(boardData);
  const [board, setBoard] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getBoardId(id));
  }, [dispatch, id]);

  const onChangeHandler = (e) =>{
    const {name, value} = e.target;
    setEdit({...boardData, [name]: value });
  }

  return (
    <DetailContainer>
      <h4>
        {board ? (
          <input
            type="text"
            name="title"
            defaultValue={boardData.title}
            onChange={onChangeHandler}
          />
        ) : (
          boardData.title
        )}
          {board ? (
          <input
            type="text"
            name="content"
            defaultValue={boardData.content}
            onChange={onChangeHandler}
          />
        ) : (
          boardData.content
        )}
        {board ? (<button
          onClick={()=>{
            dispatch(__editBoard(edit));
            dispatch(__getBoardId(id));
            setBoard(false)
          }}
          >완료</button> ):(<button onClick={()=>{setBoard(!board)}}>수정</button>)}
      </h4>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  display: flex;
  width: 30rem;
  height: 30rem;
  margin: 0 auto;
  background: tomato;
  text-align: center;
`