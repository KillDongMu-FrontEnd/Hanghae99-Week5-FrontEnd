import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { MainPage } from "../pages/MainPage"
import { DetailPage } from "../pages/DetailPage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <MainPage/> } />
        <Route exact path="/login" element={ <Login/> } />
        <Route exact path="/detail/" element={ <DetailPage/> } />
        <Route exact path="/detail/:id" element={ <DetailPage/> } />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;