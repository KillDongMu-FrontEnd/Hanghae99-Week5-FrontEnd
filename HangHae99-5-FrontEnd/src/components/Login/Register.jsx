import { LoginLogo, LoginLogoOne, RegisterContainer, LoginBox, LoginTitle, LoginBtn, LoginInput, LoginInfo, ToRegister, ErrorMsg } from "./login.styled";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { __postUser } from "../../Redux/modules/userSlice";
import { __postUser } from "../../Redux/modules/userSlice"
import { useNavigate } from "react-router-dom";

export const Register = () => {

  const init = {
    email: "",
    username: "",
    password: "",
    passwordConfirm: ""
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState(init);
  // console.log(input)

  // 회원가입 state에 input value loads
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      !input.email ||
      !input.username ||
      !input.password ||
      !input.passwordConfirm
    ) {
      return setErrorMsg("모든 항목은 필수입니다.")
    } else if ( input.password !== input.passwordConfirm ) {
      return setErrorMsg("비밀번호가 일치하지 않습니다.")
    } else {
      dispatch(__postUser(input));
      setInput(init);
      setErrorMsg("");
      navigate("/login");
    }
  };

  const [errorMsg, setErrorMsg] = useState("");

  return(
    <div>
      <LoginLogo>
        <LoginLogoOne>OTT_Review_You</LoginLogoOne>
      </LoginLogo>

      <RegisterContainer onSubmit={onSubmitHandler}>
        <LoginBox>
          <LoginTitle>Sign Up</LoginTitle>
          <LoginInput 
            type="email" 
            placeholder="E-mail"
            name="email"
            autoComplete="off"
            value={ input.email }
            onChange={(e) => onChangeHandler(e)}
          />
          <LoginInput 
            type="Username" 
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
          <LoginInput
            type="password"
            placeholder="Confirm your password"
            name="passwordConfirm"
            autoComplete="off"
            value={ input.passwordConfirm }
            onChange={(e) => onChangeHandler(e)}
          />
          <ErrorMsg>{ errorMsg }</ErrorMsg>
          <LoginBtn type="submit">회원가입</LoginBtn>
          <LoginInfo>이미 회원이신가요? <ToRegister to="/login"> 로그인</ToRegister></LoginInfo>
          <hr align="center" style={{"width": "50%"}}/>
          <LoginInfo><ToRegister to="/">메인으로</ToRegister></LoginInfo>
        </LoginBox>
      </RegisterContainer>
    </div>
  )
};