import { Header } from "../components/Header/Header";
import { LoginLogo, LoginLogoOne } from "../components/Login/login.styled";
import { MyPageList } from "../components/MyPage/MypageList";

export const MyPage = () => {
 
  return(
    <div>
      <Header/>
      <LoginLogo>
        <LoginLogoOne>OTT_Review_You</LoginLogoOne>
      </LoginLogo>
      <MyPageList/>
    </div>
  )
}