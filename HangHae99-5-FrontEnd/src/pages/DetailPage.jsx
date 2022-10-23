import { Detail } from "../components/Detail/Detail"
import { CommentForm } from "../components/Comment/CommentForm"
import { CommentList } from "../components/Comment/CommentList"
import { Header } from "../components/Header/Header";
import { Logo } from "../components/Logo/Logo";

export const DetailPage = () => {
  return(
    <div>
      <Detail/>
      <CommentForm/>
      <CommentList />
      </div>
  );
};
