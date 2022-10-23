import { Detail } from "../components/Detail/Detail"
import { CommentForm } from "../components/Comment/CommentForm"
import { CommentList } from "../components/Comment/CommentList"

export const DetailPage = () => {
  return(
    <div>
      <Detail/>
      <CommentForm/>
      <CommentList />
      </div>
  );
};