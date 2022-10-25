import { Header } from "../components/Header/Header";
import { Logo } from "../components/Logo/Logo";
import { Detail } from "../components/Detail/Detail"
import { CommentForm } from "../components/Comment/CommentForm"
import { CommentList } from "../components/Comment/CommentList"


export const DetailPage = () => {
  return(
    <div>
      <Header/>
      <Logo/>
      <Detail/>
      <CommentForm/>
      <CommentList />
    </div>
  );
};
