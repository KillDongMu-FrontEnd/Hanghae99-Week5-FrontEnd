import { __getBoards } from "../Redux/modules/boardSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const List = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getBoards());
  }, [dispatch]);

  const { boards } = useSelector((state) => state.boards);


  return(
    <div>
      {
        boards?.map((item)=>{
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
              <p>{item.createdAt}</p>              
            </div>
          )
        })
      }
    </div>
  )
};

