import styled from "styled-components"
import { Link } from "react-router-dom";

export const LoginLogo = styled.div`
  text-align: center;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -9999;
  background: #232323;
  user-select: none;
  transition: all 0.5s;
`

export const LoginLogoOne = styled.b`
  font-size: 6rem;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  color: #fee;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
  @media all and (max-width: 1024px) {
    font-size: 80px;
  }
  @media all and (max-width: 768px) {
    font-size: 60px;
  }
`

export const RegisterContainer = styled.form`
  width: 400px;
  height: 650px;
  position: absolute;
  top:calc(50vh - 200px);
  left:calc(50vw - 200px);
  overflow:hidden;
`

export const LoginContainer = styled.form`
  width: 400px;
  height: 500px;
  position: absolute;
  top:calc(50vh - 200px);
  left:calc(50vw - 200px);
  overflow:hidden;
`

export const LoginBox = styled.div`
  position:absolute;
  height:100%;
  width:100%;
  color:#fff;
  background:rgba(0,0,0,0.13);
  padding:30px 0px;
`

export const LoginTitle = styled.div`
  text-align:center;
  margin:30px 0;
  font-size:30px;
`

export const LoginBtn = styled.button`
  background: #ff4444;
  border:0;
  color:#fff;
  padding:10px;
  font-size:20px;
  width:330px;
  margin:20px auto;
  display:block;
  cursor:pointer;
  &:active {
    background: #bc4834;
  }
`

export const LoginInput = styled.input`
  display: block;
  width: 300px;
  margin: 15px auto;
  padding: 15px;
  background: rgba(0,0,0,0.2);
  color: #fff;
  border: 0;
  border: none;
  outline: none;
`

export const LoginInfo = styled.p`
  font-size: 14px;
  text-align: center;
`

export const ToRegister = styled(Link)`
  color: #666;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.5s;
  text-align: center;
  margin: 0 auto;
  &:hover {
    color: #ff4444;
  }
`

export const ErrorMsg = styled.span`
  display: flex;
  color: #ff4444;
  text-align: center;
  font-size: 0.8rem;
  margin-left: 2.5rem;
`