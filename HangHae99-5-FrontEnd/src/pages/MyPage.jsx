import { Header } from "../components/Header/Header";
import { Logo } from "../components/Logo/Logo";
import {MyPageList} from "../components/Mypage/MypageList"

export const MyPage = () => {
 
  return(
  
    <div>
      <Header/>
      <Logo/>
    <MyPageList/>
    </div>
  )
}