import styled from "styled-components"

export const StNoBoard = styled.div`
  text-align: center;
  margin-top: 30rem;
  color: white;
`

export const MainContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20rem;
`

export const CardColumn = styled.div`
  width: 50%;
  float: left;
  padding: 4%;
  box-sizing: border-box;
  // 짝수 번 째 item만 살짝 밑으로 내리기
  &:nth-child(even) {
    padding-top: 100px;
  }
`
export const Card = styled.div`
  width: 92%;
  max-width: 340px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background: #EB5160;
  color: #fff;
  cursor: pointer;
  margin-bottom: 60px;
  transition: all 0.5s;
  &:hover {
    transform: translateX(7%);
    opacity: 1;
  }
  & h1 {
    position: relative;
    padding: 190px 0px 100px 10px;
    width: 90%;
    font-size: 1.8rem;
  }
  & img {
    width: 60%;
    position: absolute;
    top: -6%;
    left: -6%;
    background: white;
    box-shadow: 0 0 10px 10px rgba(0,0,0,0.15);
    border-radius: 5px;
  }
`

export const CardBorder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 5px;
  border: 1px solid #fff;
  opacity: 0.5;
  left: -6px;
  top: -6px;
`

export const CardInfo = styled.div`
  float: right;
  text-align: right;
  margin: 15px;
  & p {
    margin-bottom: 5px;
  }
`

export const CardDate = styled.p`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`

export const LodingContainer = styled.div`
  width: 50px;
  margin: 0 auto;
`