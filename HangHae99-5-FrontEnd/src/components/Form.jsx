import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormContainer, FormGroup } from "../style/Form.styled";
import { FormInput, HighLight, InputBar, Label } from "../style/MaterialInput.styled";
import { __postBoard } from "../Redux/modules/boardSlice";

export const Form = () => {
  const init = {
      "title": "",
      "content": "",
      "author": "",
      "createdAt": ""
  }

  const dispatch = useDispatch();

  const [input, setInput] = useState(init);


  //인풋밸류 input에 넣었음
  const onChangeHandler = (e) =>{
    const {name, value} = e.target;
    setInput({...input, [name]: value });
  }

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    dispatch(__postBoard(input));
    setInput(init);
  }

  return(
    <FormContainer onSubmit={onSubmitHandler}>
        <FormGroup>
          <FormInput
            type="text"
            autoComplete="off"
            name="title"
            value={input.title}
            onChange={(e) => onChangeHandler(e)}
          />
          <HighLight/>
          <InputBar/>
          <Label>제목임</Label>
        </FormGroup>
        <FormGroup>
          <FormInput 
            type="text"
            autoComplete="off"
            name="content"
            value={input.content}
            onChange={(e) => onChangeHandler(e)} 
          />
          <HighLight/>
          <InputBar/>
          <Label>내용임</Label>
        </FormGroup>

        <button>등록하기</button>
    </FormContainer>
  )
};
