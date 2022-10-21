import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormContainer, FormGroup } from "../style/Form.styled";
import { FormInput, HighLight, InputBar, Label } from "../style/MaterialInput.styled";
import { __postBoard } from "../Redux/modules/boardSlice";

export const Form = () => {

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    title: "",
    content: ""
  });
  const { title, content } = input;
  console.log(typeof input)

  return(
    <FormContainer>
        <FormGroup>
          <FormInput
            type="text"
            autoComplete="off"
            value={title}
            onChange={(e) => {
              const { valueTitle } = e.target;
              setInput({
                ...input,
                title: valueTitle,
              });
            }} 
          />
          <HighLight/>
          <InputBar/>
          <Label>제목임</Label>
        </FormGroup>
        <FormGroup>
          <FormInput 
            type="text"
            autoComplete="off"
            value={content}
            onChange={(e) => {
              const { valueContent } = e.target;
              setInput({
                ...input,
                content: valueContent,
              });
            }} 
          />
          <HighLight/>
          <InputBar/>
          <Label>내용임</Label>
        </FormGroup>
        <button onClick={() => {
          dispatch(__postBoard(input));
          setInput({ title: "", content: "" });
        }}>등록하기</button>
    </FormContainer>
  )
};
