import { Detail } from "../components/Detail/Detail"
import { CommentForm } from "../components/Comment/CommentForm"
import { CommentList } from "../components/Comment/CommentList"
import { Header } from "../components/Header/Header";

export const DetailPage = () => {
  return(
    <div>
      <Header/>
      <Detail/>
      <CommentForm/>
      <CommentList />
    </div>
  );
};
