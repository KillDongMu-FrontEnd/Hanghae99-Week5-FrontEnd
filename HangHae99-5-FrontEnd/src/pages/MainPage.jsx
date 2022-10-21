import { Header } from "../components/Header";
import { Form } from "../components/Form"
import { Logo } from "../components/Logo";
import { List } from "../components/List";

export const MainPage = () => {
  return(
    <div>
      <Logo/>
      <Header/>
      <Form/>
      <List/>
    </div>
  )
}