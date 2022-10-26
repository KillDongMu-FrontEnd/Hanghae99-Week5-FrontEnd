import { Header } from "../components/Header/Header";
import { Form } from "../components/Form/Form";
import { LoginLogo, LoginLogoOne } from "../components/Login/login.styled";

export const FormPage = () => {
  return(
    <div>
      <Header/>
      {/* <Logo/> */}
      <LoginLogo>
        <LoginLogoOne>OTT_Review_You</LoginLogoOne>
      </LoginLogo>
      <Form/>
    </div>
  );
};
