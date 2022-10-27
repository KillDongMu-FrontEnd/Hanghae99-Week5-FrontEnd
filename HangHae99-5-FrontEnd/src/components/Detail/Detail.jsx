import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardId } from "../../Redux/modules/boardSlice";
import { useNavigate, useParams } from "react-router-dom";
import {
  __editBoard,
  __delBoard,
  __countHeart,
} from "../../Redux/modules/boardSlice";
import { __addComment, __delComment } from "../../Redux/modules/commentSlice";
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
  DetailBsHeartFill,
  DetailCommentEditInput,
  DetailOptionBtn,
} from "./Detail.styled";
import styled from "styled-components";

export const Detail = () => {
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 상세페이지 모든 데이터 값 가져오기
  const boardData = useSelector((state) => state.boards.board);

  const init = {
    title: "",
    content: "",
  };

  const [update, setEdit] = useState(init);
  const [board, setBoard] = useState(false);

  const username = localStorage.getItem("username");
  const token = localStorage.getItem("authorization");

  useEffect(() => {
    dispatch(__getBoardId(id));
  }, [dispatch, id]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEdit({ ...update, [name]: value });
  };

  const [comment, setComment] = useState("");
  const commentChangeHandler = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  // 수정시 초기값 보여주는 useEffect
  useEffect(() => {
    if(!!boardData?.title){
      setEdit({title: boardData?.title,
      content: boardData?.content})
    }
  }, [boardData]);

  // console.log(boardData);
  const amILoved = boardData?.heartedUsernameList.includes(username)

  // 좋아요 usestate
  // const [heart, setHeart] = useState(!!boardData.countHeart&&boardData.countHeart);

  const detailImage = boardData?.file
  // const heart = boardData?.heartedUsernameList
  const [heart, setHeart] = useState(false);

  return (   
    <DetailContainer>
      {board ? (
        <DetailHeader>
          <input
            type="text"
            name="title"
            value={update?.title}
            onChange={onChangeHandler}
          />
          <DetailAuthor>{!!boardData.username && username}</DetailAuthor>
        </DetailHeader>
      ) : (
        <DetailHeader>
          <h1>
            <strong>{boardData?.title}</strong>
          </h1>
          <DetailAuthor>{boardData?.username}</DetailAuthor>
        </DetailHeader>
      )}
      <DetailContent>
        <ImageSize src={detailImage} alt="test"/>
        <hr />
        {board ? (
          <DetailText>
            <DetailEditInput
              type="text"
              name="content"
              defaultValue={update?.content}
              onChange={onChangeHandler}
            />
          </DetailText>
        ) : (
          <DetailText>
            <p>{boardData?.content}</p>
          </DetailText>
        )}
        <DetailInfo>
          {username === boardData?.username ? (
            <div>
              {board ? (
                <DetailOptionBtn
                  onClick={() => {
                    dispatch(__editBoard({ update, id }));
                    dispatch(__getBoardId(id));
                    setBoard(false);
                    window.location.reload();
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
              )}
              <DetailOptionBtn
                onClick={() => {
                  dispatch(__delBoard(id));
                  navigate("/");
                }}
              >
                삭제
              </DetailOptionBtn>
            </div>
          ) : null}
          { 
            amILoved ? 
            <>
             <DetailBsHeartFill onClick={() => {
              dispatch(__countHeart(id));
              setHeart(!heart);
            }}/>
              <p>{ boardData?.heartedUsernameList?.length }</p>
            </>
            : 
            <DetailBsHeart onClick={() => {
              dispatch(__countHeart(id));
              setHeart(!heart);
            }}/>
          }
        </DetailInfo>
      </DetailContent>

      <DetailContent>
        {/* 댓글 리스트 */}
        <DetailComment>
          {!!boardData?.commentList && boardData?.commentList?.map((item) => {
            return (
              <DetailCommentItem key={item?.commentId}>
                <DetailCommentEditInput
                  type="text"
                  name="comment"
                  spellcheck={false}
                  value={item?.comment}
                  onChange={onChangeHandler}
                  readOnly
                />
                { 
                  username === item?.member?.username ? (
                    <DetailCommentItemDel
                      onClick={() => {
                        dispatch(__delComment(item.commentId));
                        window.location.reload();
                    }}>
                    X
                  </DetailCommentItemDel>
                  ) : null
                }
              </DetailCommentItem>
            );
          })}
        </DetailComment>
        <DetailCommentInfo>
          <DetailCommentInput
            placeholder="댓글을 달아보세요"
            onChange={commentChangeHandler}
          />
          <DetailCommentBtn
            onClick={() => {
              dispatch(__addComment({ comment, id }));
              window.location.reload();
          }}>
            댓
          </DetailCommentBtn>
        </DetailCommentInfo>
      </DetailContent>

      <DetailFloatingBtn
        onClick={() => {
          navigate("/");
      }}>
        뒤로 가기
      </DetailFloatingBtn>
    </DetailContainer>
  );
};

export const DetailCommentItem = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`;

export const DetailCommentItemDel = styled.button`
  border: none;
  padding: 1rem;
  transition: all 0.3s;
  cursor: pointer;
  background: transparent;
  &:hover {
    color: #ff4444;
  }
`;

export const ImageSize = styled.img`
	height: 200px;
	width: 200px;
`

export const DetailEditInput = styled.textarea`
  border: none;
  color: #494856;
  line-height: 38px;
  background: transparent;
  width: 85%;
  height: 40vh;
  font-size: 14px;
  margin: 0;
`