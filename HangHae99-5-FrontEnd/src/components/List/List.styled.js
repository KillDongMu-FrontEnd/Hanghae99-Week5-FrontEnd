import styled from "styled-components"
import { Link } from "react-router-dom"

export const MainContainer = styled.div`
  margin-top: 40rem;
`

export const LinkContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 5rem;
`

export const GoToForm = styled(Link)`
  font-size: 3rem;
  text-decoration: none;
  color: black;
  width: 200px;
  margin-left: 20px;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  grid-gap: 2rem;
  margin: 2rem;
  margin-top: 30rem;
  width: 80%;
  background: #b5b5ed;
  float: right;
  margin: 0;
  box-sizing: border-box;
  border-radius: 8px;
`

export const CardItem = styled.div`
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

export const CardItemTitle = styled.h2`
  text-align: center;
  padding: 10px;
`