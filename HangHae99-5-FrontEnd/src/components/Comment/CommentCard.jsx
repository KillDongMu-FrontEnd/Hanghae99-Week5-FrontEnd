import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __editComment,__delComment } from "../../Redux/modules/commentSlice";


export const CommentCard = (props) => {
 const dispatch = useDispatch();
 const {comment} = props;
 console.log(comment)
 const [edit,setEdit] = useState(false);
 const [mentEdit,setMentEdit] = useState(comment);


  return (
    <div>
      <p>gg</p>
     {/* <p>
        {comment.name}님 : 
        {edit ? (
          <input
            type="text"
            name="coment"
            required
            default_value={comment.comment}
            onChange={(e) => setMentEdit(e.target.value)}
          />
        ) : (
          comment.comment
        )}
        {edit ? <button
        onClick={(e)=>{
          e.preventDefault();
          dispatch(__editComment({...comment,comment:mentEdit}));
          setEdit(false)
        }}
        type="submit"
        >완료</button> : <button onClick={()=>{setEdit(!edit)}}>수정</button>}
        <button onClick={() => dispatch(__delComment(comment))}>삭제</button>
      </p> */}
    </div>
  );
};
