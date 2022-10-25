import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardId } from "../../Redux/modules/boardSlice";
import { useNavigate, useParams } from "react-router-dom";
import { __editBoard } from "../../Redux/modules/boardSlice"
import { BsHeartFill, BsHeart, BsChatLeftText, BsThreeDots } from "react-icons/bs";
import { DetailContainer, DetailHeader, DetailAuthor, DetailContent, DetailText, DetailInfo, DetailFloatingBtn } from "./Detail.styled";
import styled from "styled-components";


export const Detail = () => {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const boardData = useSelector((state) => state.boards.board);
  const commentList = boardData.commentList



  const [edit, setEdit] = useState();
  const [board, setBoard] = useState(false);

  useEffect(() => {
    dispatch(__getBoardId(id));
  }, [dispatch, id]);

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
        <h1><strong>{ boardData.title }</strong></h1>
        <DetailAuthor>{ boardData.username }</DetailAuthor>
      </DetailHeader>

      <DetailContent>
        <h1>
          여기에 이미지?<br/>
        </h1>
        <hr/>
        <DetailText>
          <p>{ boardData.content }</p>
        </DetailText>
        <DetailInfo>
          <p>{ boardData.createdAt?.substr(0,10) }</p>
          <div>
            <DetailBsThreeDots/>
            <DetailBsHeart/>
            <DetailBsChatLeftText/>
          </div>
        </DetailInfo>
      </DetailContent>
      
      <DetailContent>
        <DetailComment>
          {
            commentList.map((comment) => {
              return (
                <div>
                  <p>
                    {comment}
                  </p>
                  <hr/>
                </div>
              )
            })
          }
          {/* <p>
            댓글임
          </p>
          <hr/>
          <p>
            댓글임 댓글임 댓글임 댓글임 댓글임 
          </p>
          <hr/>
          <p>
            댓글임 댓글임 댓글임 댓글임 댓글임 댓글임 댓글임 댓글임 댓글임 댓글임댓글임 댓글임 댓글임 댓글임 댓글임
          </p>
          <hr/> */}
        </DetailComment>
        <DetailCommentInfo>
          <DetailCommentInput/>
        </DetailCommentInfo>
      </DetailContent>

      <DetailFloatingBtn onClick={() => {
        navigate("/")
      }}>뒤로 가기</DetailFloatingBtn>

    </DetailContainer>
  );
};

export const DetailCommentInfo = styled.div`
  background-color: #ffffffd0;
	box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	padding: 15px 30px;
	bottom: 0;
	left: 0;
	width: 79%;
  & p {
    font-size: 14px;
	  margin: 0;
  }
`

export const DetailComment = styled.div`
  overflow: scroll;
  background-color: #fff;
	height: 100%;
  padding: 0px;
	-ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  & p {
    color: #494856;
    line-height: 38px;
  }
`

export const DetailCommentInput = styled.input`
  width: 300px;
  margin: 0 auto;
`

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

