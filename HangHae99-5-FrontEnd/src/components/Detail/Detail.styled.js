import styled from "styled-components"

export const DetailContainer = styled.div`
	background-color: #fff;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	display: flex;
	height: 80vh;
	width: 80vw;
	margin: 0 auto;
  margin-bottom: 30px;
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`

export const DetailText = styled.div`
  overflow: scroll;
  background-color: #fff;
	height: 60%;
  padding: 0px;
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
	justify-content: space-between;
	position: absolute;
	padding: 15px 30px;
	bottom: 0;
	left: 0;
	width: 80%;
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