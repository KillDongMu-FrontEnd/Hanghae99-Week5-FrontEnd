import { FormContainer, FormGroup } from "../style/Form.styled";
import { FormInput, HighLight, InputBar, Label } from "../style/MaterialInput.styled";

export const Form = () => {
  return(
    <FormContainer>
      <form>
        <FormGroup>
          <FormInput required/>
          <HighLight/>
          <InputBar/>
          <Label>제목임</Label>
        </FormGroup>
        <FormGroup>
          <FormInput required/>
          <HighLight/>
          <InputBar/>
          <Label>내용임</Label>
        </FormGroup>
        <FormGroup>
          <FormInput required/>
          <HighLight/>
          <InputBar/>
          <Label>작성자임</Label>
        </FormGroup>
      </form>
    </FormContainer>
  )
};
