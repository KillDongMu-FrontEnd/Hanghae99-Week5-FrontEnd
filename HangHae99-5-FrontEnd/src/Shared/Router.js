import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Register } from "../components/Login/Register";
import { MainPage } from "../pages/MainPage"
import { FormPage } from "../pages/FormPage";
import { DetailPage } from "../pages/DetailPage";
import { ErrorPage } from "../pages/ErrorPage";
import { MyPage } from "../pages/MyPage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <MainPage/> } />
        <Route exact path="/login" element={ <Login/> } />
        <Route exact path="/register" element={ <Register/> } />
        <Route exact path="/api/boards/detail/:id" element={ <DetailPage/> } />
        <Route exact path="/form"  element={ <FormPage/> }/>
        <Route exact path="/mypage" element={ <MyPage/> } />
        <Route path="*" element={ <ErrorPage/> } />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;