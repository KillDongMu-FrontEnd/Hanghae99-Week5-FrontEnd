import { LoginLogo, LoginLogoOne, LoginContainer, LoginBox, LoginTitle, LoginBtn, LoginInput, LoginInfo, ToRegister } from "./login.styled";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const Login = () => {

  const dispatch = useDispatch();

  const init = {
    username: "",
    password: ""
  }

  const [input, setInput] = useState(init);
  // console.log(input)

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch();
    setInput("");

  }

  return(
    <div>
      <LoginLogo>
        <LoginLogoOne>OTT_Review_You</LoginLogoOne>
      </LoginLogo>

      <LoginContainer onSubmit={onSubmitHandler}>
        <LoginBox>
          <LoginTitle>Sign in</LoginTitle>
          <LoginInput 
            type="text" 
            placeholder="Username"
            name="username"
            autoComplete="off"
            value={ input.username }
            onChange={(e) => onChangeHandler(e)}
          />
          <LoginInput 
            type="password" 
            placeholder="Password"
            name="password"
            autoComplete="off"
            value={ input.password }
            onChange={(e) => onChangeHandler(e)}
          />
          <LoginBtn>로그인</LoginBtn>
          <LoginInfo>아직 회원이 아니신가요? <ToRegister to="/register"> 회원가입</ToRegister></LoginInfo>
          <hr align="center" style={{"width": "50%"}}/>
          <LoginInfo><ToRegister to="/">메인으로</ToRegister></LoginInfo>
        </LoginBox>
      </LoginContainer>
    </div>
  )
};
