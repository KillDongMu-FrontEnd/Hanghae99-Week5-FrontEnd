import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorPage = () => {
  return(
    <ErrorContainer>
      <h2>404</h2>
      <Flip>
        <div><div><ErrorPageLink to="/">메인 페이지로 돌아가기</ErrorPageLink></div></div>
        <div><div><ErrorPageLink to="/">메인 페이지로 돌아가기</ErrorPageLink></div></div>
        <div><div><ErrorPageLink to="/">메인 페이지로 돌아가기</ErrorPageLink></div></div>
      </Flip>
      <h2>Not Found</h2>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  margin: 0px;
  font-family: 'Roboto';
  text-align: center;
  color:#999;
  text-transform: uppercase;
  font-size:36px;
  font-weight:bold;
  padding-top:200px;  
  position:fixed;
  width:100%;
  bottom:45%;
  display:block;
`

const ErrorPageLink = styled(Link)`
  text-decoration: none;
  color: #fee;
`

const Flip = styled.div`
  height: 50px;
  overflow: hidden;
  & div > div {
    color:#fff;
    padding:4px 12px;
    height:45px;
    margin-bottom:45px;
    display:inline-block;
  }
  & div:first-child {
    animation: show 5s linear infinite;
  }
  & div div {
    background:#42c58a;
  }
  & div:first-child div {
    background:#4ec7f3;
  }
  & div:last-child div {
    background:#DC143C;
  }
  @keyframes show {
    0% {margin-top:-270px;}
    5% {margin-top:-180px;}
    33% {margin-top:-180px;}
    38% {margin-top:-90px;}
    66% {margin-top:-90px;}
    71% {margin-top:0px;}
    99.99% {margin-top:0px;}
    100% {margin-top:-270px;}
  }
`