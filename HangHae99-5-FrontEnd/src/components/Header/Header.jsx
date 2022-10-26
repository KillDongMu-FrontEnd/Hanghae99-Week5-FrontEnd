import { MenuToggle, Checkbox, Bar, Menu, MenuItem, MenuLink } from "./Header.styled"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export const Header = () => {

  const userId = localStorage.getItem("username");

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLogin")
    localStorage.removeItem("username")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("authorization")
  }

  return(
    <MenuToggle>
      <Checkbox type="checkbox" />

      <Bar/>
      <Bar/>
      <Bar/>

      <Menu>
        <MenuItem>
          {
            userId === null ? 
            <MenuLink to="/login">Log In</MenuLink> : 
            <Logout
              onClick={() => {
                logout();
                navigate("/")
              }}
            >Log Out</Logout>
          }
        </MenuItem>
        <hr/>
        <MenuItem><MenuLink to="/">Home</MenuLink></MenuItem>
        <MenuItem><MenuLink to="/form">글 작성하기*</MenuLink></MenuItem>
        <MenuItem><MenuLink to="/mypage">마이페이지*</MenuLink></MenuItem>
      </Menu>
    </MenuToggle>
  )
};

export const Logout = styled.p`
  cursor: pointer;
`