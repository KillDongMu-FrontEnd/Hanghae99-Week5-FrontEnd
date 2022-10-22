import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormContainer, FormGroup } from "../style/Form.styled";
import { FormInput, HighLight, InputBar, Label } from "../style/MaterialInput.styled";
import { __postBoard } from "../Redux/modules/boardSlice";

export const Form = () => {

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    board_id: 4,
    title: "",
    content: "",
    author: "lee"
  });
  const { title, content } = input;
  console.log(input)

  return(
    <FormContainer>
        <FormGroup>
          <FormInput
            type="text"
            autoComplete="off"
            id="title"
            value={title}
            onChange={(e) => {
              const { value } = e.target;
              setInput({
                ...input,
                title: value,
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
            id="content"
            value={content}
            onChange={(e) => {
              const { value } = e.target;
              setInput({
                ...input,
                content: value,
              });
            }} 
          />
          <HighLight/>
          <InputBar/>
          <Label>내용임</Label>
        </FormGroup>
<<<<<<< HEAD
      </form>
=======
        <button onClick={() => {
          console.log(input)
          dispatch(__postBoard(input));
          setInput({ board_id: 5, title: "", content: "" });
        }}>등록하기</button>
>>>>>>> 6edfefdf43f89a5ca4a89b6f4849e2e3dd71c8b2
    </FormContainer>
  )
};
