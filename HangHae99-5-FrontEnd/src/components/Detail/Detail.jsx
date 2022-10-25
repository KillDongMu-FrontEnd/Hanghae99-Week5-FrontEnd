import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardId } from "../../Redux/modules/boardSlice";
import { useNavigate, useParams } from "react-router-dom";
import { __editBoard, __delBoard } from "../../Redux/modules/boardSlice";
import {
  BsHeartFill,
  BsHeart,
  BsChatLeftText,
  BsThreeDots,
} from "react-icons/bs";
import {
  DetailContainer,
  DetailHeader,
  DetailAuthor,
  DetailContent,
  DetailText,
  DetailInfo,
  DetailFloatingBtn,
  DetailCommentInfo,
  DetailComment,
  DetailCommentInput,
  DetailCommentBtn,
  DetailBsHeart,
  DetailCommentEditInput,
  DetailOptionBtn,
  DetailBsChatLeftText,
  DetailBsThreeDots
} from "./Detail.styled";
import styled from "styled-components";

export const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const boardData = useSelector((state) => state.boards.board);
  const commentList = boardData.commentList;

  const [edit, setEdit] = useState("");
  const [board, setBoard] = useState(false);

  const username = localStorage.getItem("username");

  useEffect(() => {
    dispatch(__getBoardId(id));
  }, [dispatch, id]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEdit({ ...edit, [name]: value});
  };

  useEffect(()=>{
    setEdit(boardData);
  },[boardData]);

  return (
    <DetailContainer>
      {board ? (
        <DetailHeader>
          <input
            type="text"
            name="title"
            value={edit?.title}
            onChange={onChangeHandler}
          />
          <DetailAuthor>{boardData.username}</DetailAuthor>
        </DetailHeader>
      ) : (
        <DetailHeader>
          <h1>
            <strong>{boardData.title}</strong>
          </h1>
          <DetailAuthor>{boardData.username}</DetailAuthor>
        </DetailHeader>
      )}
      {/* <DetailHeader>
       
        <DetailAuthor>{boardData.username}</DetailAuthor>
      </DetailHeader> */}

      <DetailContent>
        <h1>
          여기에 이미지?
          <br />
        </h1>
        <hr />
        {board ? (
          <DetailText>
            <input
              type="text"
              name="content"
              value={edit?.content}
              onChange={onChangeHandler}
            />
          </DetailText>
        ) : (
          <DetailText>
            <p>{ boardData.content }</p>
          </DetailText>
        )}

        <DetailInfo>
          {
            username === boardData.username ? (
              <div>
                {
                  board ? (
                    <DetailOptionBtn
                      onClick={() => {
                        dispatch(__editBoard(edit));
                        dispatch(__getBoardId(id));
                        setBoard(false);
                      }}
                    >
                      완료
                    </DetailOptionBtn>
                  ) : (
                    <DetailOptionBtn
                      onClick={() => {
                        setBoard(!board);
                      }}
                    >
                      수정
                    </DetailOptionBtn>
                  )
                }
                <DetailOptionBtn>삭제</DetailOptionBtn>
              </div>
            ) : null
          }
          <DetailBsHeart />
        </DetailInfo>
      </DetailContent>

      <DetailContent>
        <DetailComment>
          {commentList?.map((comment, idx) => {
            return (
              <div key={idx}>
                <DetailCommentEditInput
                  type="text"
                  name="comment"
                  spellcheck={false}
                  value={comment}
                  onChange={onChangeHandler}
                  readOnly
                />
                <hr />
              </div>
            );
          })}
        </DetailComment>
        <DetailCommentInfo>
          <DetailCommentInput />
          <DetailCommentBtn>댓</DetailCommentBtn>
        </DetailCommentInfo>
      </DetailContent>

      <DetailFloatingBtn
        onClick={() => {
          navigate("/");
        }}
      >
        뒤로 가기
      </DetailFloatingBtn>
    </DetailContainer>
  );
};
