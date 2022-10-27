import { Header } from "../components/Header/Header";
import { Logo } from "../components/Logo/Logo";
import { Detail } from "../components/Detail/Detail";
import { LoginLogo, LoginLogoOne } from "../components/Login/login.styled";

export const DetailPage = () => {
  return(
    <div>
      <Header/>
      {/* <Logo/> */}
      <LoginLogo>
        <LoginLogoOne>OTT_Review_You</LoginLogoOne>
      </LoginLogo>
      <Detail/>
    </div>
  );
};
