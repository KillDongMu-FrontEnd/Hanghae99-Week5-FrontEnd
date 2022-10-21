import { MenuToggle, Checkbox, Bar, Menu, MenuItem } from "../style/Header.styled"

export const Header = () => {
  return(
    <MenuToggle>
      <Checkbox type="checkbox" />

      <Bar/>
      <Bar/>
      <Bar/>

      <Menu>
        <MenuItem>asd</MenuItem>
        <MenuItem>asd</MenuItem>
        <MenuItem>asd</MenuItem>
      </Menu>
    </MenuToggle>
  )
}