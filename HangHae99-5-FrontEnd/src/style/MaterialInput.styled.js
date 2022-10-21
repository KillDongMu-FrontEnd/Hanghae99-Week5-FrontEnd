import styled from "styled-components";

export const FormInput = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid tomato;
  &:focus {
    outline: none;
  }
  &:focus ~ label, &:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: tomato;
  }
`

export const Label = styled.label`
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
`

export const HighLight = styled.span`
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`
export const InputBar = styled.span`
  position: relative;
  display: block;
  width: 300px;
  &::before, &::after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: tomato;
    transition: 0.2s ease all;
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
  }
  &::before {
    left: 50%
  }
  &::after {
    right: 50%
  }
`
