import styled from "styled-components"
import { Link } from "react-router-dom";

import { LoginLogo, LoginLogoOne, LoginContainer, LoginBox, LoginTitle, LoginBtn, LoginInput, LoginInfo, ToRegister } from "./login.styled";

export const Login = () => {
  return(
    <div>
      <LoginLogo>
        <LoginLogoOne>OTT_Review_You</LoginLogoOne>
      </LoginLogo>

      <LoginContainer>
      <ToRegister to="/">뒤로가기</ToRegister>
        <LoginBox>
          <LoginTitle>Login</LoginTitle>
          <LoginInput type="text" placeholder="Username"/>
          <LoginInput type="password" placeholder="Password"/>
          <LoginBtn>Login</LoginBtn>
          <LoginInfo>아직 회원이 아니신가요? <ToRegister> 회원가입하기</ToRegister></LoginInfo>
        </LoginBox>
      </LoginContainer>
    </div>
  )
};
