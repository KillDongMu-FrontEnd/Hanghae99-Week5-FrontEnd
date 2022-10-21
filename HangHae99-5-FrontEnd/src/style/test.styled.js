import styled from "styled-components"

export const Sungho = styled.h1`
  position: relative;
  font-size: 3rem;
  color: white;
  width: fit-content;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  &::before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }
  &:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    inset: 0 0 0 0;
    background: tomato;
    z-index: -1;
    transition: transform .3s ease;
  }
`