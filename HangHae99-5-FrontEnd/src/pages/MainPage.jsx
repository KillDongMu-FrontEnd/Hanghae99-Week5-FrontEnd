import { Header } from "../components/Header/Header";
import { Logo } from "../components/Logo/Logo";
import { List } from "../components/List/List";
import { LoginLogo, LoginLogoOne } from "../components/Login/login.styled";

export const MainPage = () => {
  return(
    <div>
      <Header/>
      {/* <Logo/> */}
      <LoginLogo>
        <LoginLogoOne>OTT_Review_You</LoginLogoOne>
      </LoginLogo>
      <List/>
    </div>
  )
}