import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getMyPageId } from "../../Redux/modules/mypageSlice";
import axios from "axios";

export const MyPageList = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem("username");
  const dispatch = useDispatch();

  useEffect(()=>{
     dispatch(__getMyPageId(username))
  },[dispatch]);

  return(
  <div></div>
  )
}