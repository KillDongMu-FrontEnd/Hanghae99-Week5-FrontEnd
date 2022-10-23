import { CommentCard } from "./CommentCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { __getComment } from "../../Redux/modules/commentSlice";

export const CommentList = () => {
  const commentCard = useSelector((state) => state.comments.comment); 
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(__getComment(id));
  },[dispatch,id]);

  return (
    <div>
      {
        commentCard?.map((comment)=>(
          <CommentCard 
            comment={comment} key={comment.id} 
          />
        ))
      }
    </div>
  );
};
