import { MenuToggle, Checkbox, Bar, Menu, MenuItem, MenuLink } from "./Header.styled"

export const Header = () => {
  return(
    <MenuToggle>
      <Checkbox type="checkbox" />

      <Bar/>
      <Bar/>
      <Bar/>

      <Menu>
        <MenuItem><MenuLink to="/login">Sign In</MenuLink></MenuItem>
        <hr/>
        <MenuItem><MenuLink to="/">Home</MenuLink></MenuItem>
        <MenuItem><MenuLink to="/form">글 작성하기</MenuLink></MenuItem>
        <MenuItem>asd</MenuItem>
      </Menu>
    </MenuToggle>
  )
}