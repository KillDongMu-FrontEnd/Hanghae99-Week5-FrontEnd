import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getMyPageId } from "../../Redux/modules/mypageSlice";

export const MyPageList = () => {
  const username = localStorage.getItem("username");
  const dispatch = useDispatch();
  

  useEffect(()=>{
     dispatch(__getMyPageId(username))
  },[dispatch, username]);

  return(
  <div></div>
  )
}