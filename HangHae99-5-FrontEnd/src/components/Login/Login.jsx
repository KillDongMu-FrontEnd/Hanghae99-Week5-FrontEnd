import { LoginLogo, LoginLogoOne, LoginContainer, LoginBox, LoginTitle, LoginBtn, LoginInput, LoginInfo, ToRegister } from "./login.styled";

export const Login = () => {
  return(
    <div>
      <LoginLogo>
        <LoginLogoOne>OTT_Review_You</LoginLogoOne>
      </LoginLogo>

      <LoginContainer>
        <LoginBox>
          <LoginTitle>Sign in</LoginTitle>
          <LoginInput type="text" placeholder="Username"/>
          <LoginInput type="password" placeholder="Password"/>
          <LoginBtn>로그인</LoginBtn>
          <LoginInfo>아직 회원이 아니신가요? <ToRegister to="/register"> 회원가입</ToRegister></LoginInfo>
          <hr align="center" style={{"width": "50%"}}/>
          <LoginInfo><ToRegister to="/">메인으로</ToRegister></LoginInfo>
        </LoginBox>
      </LoginContainer>
    </div>
  )
};
