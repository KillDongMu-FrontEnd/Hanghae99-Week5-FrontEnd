import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Register } from "../components/Login/Register";
import { MainPage } from "../pages/MainPage"
import { FormPage } from "../pages/FormPage";
import { DetailPage } from "../pages/DetailPage";
import { ErrorPage } from "../pages/ErrorPage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <MainPage/> } />
        <Route exact path="/login" element={ <Login/> } />
        <Route exact path="/register" element={ <Register/> } />
        <Route exact path="/detail/" element={ <DetailPage/> } />
        <Route exact path="/detail/:id" element={ <DetailPage/> } />
        <Route exact path="/form"  element={ <FormPage/> }/>
        <Route path="*" element={ <ErrorPage/> } />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;