import { MenuToggle, Checkbox, Bar, Menu, MenuItem, MenuLink } from "./Header.styled"
import { __logoutUser } from "../../Redux/modules/loginSlice"
import { useDispatch } from "react-redux"

export const Header = () => {

  const userId = localStorage.getItem("username")
  const dispatch = useDispatch();

  // const logoutHandler = () => {
  //   dispatch(__logoutUser());
  // }

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
            <p>Log Out</p>
          }
        </MenuItem>
        <hr/>
        <MenuItem><MenuLink to="/">Home</MenuLink></MenuItem>
        <MenuItem><MenuLink to="/form">글 작성하기*</MenuLink></MenuItem>
        <MenuItem><MenuLink to="/mypage">마이페이지*</MenuLink></MenuItem>
      </Menu>
    </MenuToggle>
  )
}