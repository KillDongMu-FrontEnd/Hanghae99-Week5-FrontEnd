import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardId } from "../../Redux/modules/boardSlice";
import { useNavigate, useParams } from "react-router-dom";


export const Detail = () => {
  const boardData = useSelector((state)=> state.boards.board) 
  const { id } = useParams();
  const [edit,setEdit] = useState(boardData||[]);
console.log(id)
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(__getBoardId(id));
  }, [dispatch,id]);


  return(
  <div>
    <button onClick={()=>navigate('/')}>뒤로가기</button>
    <h3>{boardData.title}</h3>
    <p>{boardData.content}</p>
    <button>수정하기</button>
  </div>
  )
};