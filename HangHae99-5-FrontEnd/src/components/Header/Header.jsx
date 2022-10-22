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
        <MenuItem>asd</MenuItem>
        <MenuItem>asd</MenuItem>
      </Menu>
    </MenuToggle>
  )
}