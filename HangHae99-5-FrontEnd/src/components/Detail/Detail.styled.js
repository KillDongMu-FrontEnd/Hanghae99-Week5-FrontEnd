import styled from "styled-components"
import { BsHeartFill, BsHeart, BsChatLeftText, BsThreeDots } from "react-icons/bs";

export const DetailContainer = styled.div`
	background-color: #fff;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
	display: flex;
	height: 80vh;
	width: 80vw;
	margin: 0 auto;
  margin-top: 20rem;
  margin-bottom: 10rem;
	max-width: 800px;
`

export const DetailHeader = styled.div`
	background-color: #494856;
	color: #fff;
	display: flex;
	flex: 2;
	flex-direction: column;
	justify-content: space-between;
	padding: 30px;
  & h1 {
    font-size: 28px;
    font-weight: normal;
    position: relative;
    text-transform: uppercase;
  }
  & h1::after {
    background-color: #ff4444;
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 4px;
    width: 50px;
  }
`
export const DetailAuthor = styled.div`
	display: flex;
	align-items: center;
`

export const DetailContent = styled.div`
	background-color: #fff;
	flex: 3;
  width: 100%;
  padding: 30px 30px 50px;
	position: relative;
`

export const DetailText = styled.div`
  overflow: scroll;
  background-color: #fff;
	height: fit-content;
  padding: 0px;
	-ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  &::first-letter {
    font-size: 250%;
    font-weight: bold;
    line-height: 52px;
  }
  & p {
    color: #494856;
    line-height: 38px;
  }
`

export const DetailInfo = styled.div`
  background-color: #fff;
	box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: space-around;
	position: absolute;
	padding: 15px 30px;
	bottom: 0;
	left: 0;
	width: 90%;
  & p {
    font-size: 14px;
	  margin: 0;
  }
`

export const DetailFloatingBtn = styled.button`
  border-radius: 18px;
	background-color: #001F61;
	border: 1px solid #001F61;
	box-shadow: 0 16px 22px -17px #03153B;
	color: #fff;
	cursor: pointer;
	font-size: 16px;
	line-height: 20px;
	padding: 12px 20px;
	position: fixed;
	bottom: 50px;
	right: 20px;
	z-index: 999;
`

export const DetailCommentInput = styled.input`
  width: 300px;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid rgba(0,0,0,0.4);
  outline: none;
`

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
  width: 75%;
  & p {
    font-size: 14px;
    margin: 0;
  }
`;

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
`;


export const DetailCommentBtn = styled.button`
  border: none;
  background-color: #ff4444;
`;


export const DetailOptionBtn = styled.button`
  border: none;
  cursor: pointer;
  width: fit-content;
  text-align: center;
  background-color: transparent;
`

export const DetailBsHeart = styled(BsHeart)`
  color: #ff4444;
  font-size: 1.2rem;
  margin-right: 1.5rem;
`

export const DetailCommentEditInput = styled.input`
  width: 190px;
  border: none;
  outline: none;
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
