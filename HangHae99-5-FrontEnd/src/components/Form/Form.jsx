import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { FormContainer, FormGroup } from "./Form.styled";
import { fileUploadApi } from "../../Redux/modules/API/fileUploadApi"
import { FormInput, HighLight, InputBar, Label } from "../../style/MaterialInput.styled";
import { __postBoard } from "../../Redux/modules/boardSlice";

export const Form = () => {
  const init = {
    title: "",
    content: "",
    username: "",
  };

  const dispatch = useDispatch();

  const [input, setInput] = useState(init);

  //인풋밸류 input에 넣었음
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__postBoard(input));
    setInput(init);

    const formData = new FormData();
    // formData.getAll(formData)
    // Object.entries(input).forEach(([key, value]) => {
      // formData.append(key, value);
      // fileUploadApi(formData);
  // });
  
  };
 //이미지 폼밸류 보내기
 const [image,setImage] = useState(null);

 const fileUpload = (e)  =>{
  encodeFileToBase64(e.target.files[0]);
  const image = URL.createObjectURL(e.target.files[0]);
  setImage(image);
 }

  //이미지미리보기
  const [imageSrc, setImageSrc] = useState("");

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <FormContainer onSubmit={onSubmitHandler}>
      <FormGroup>
        <FormInput
          type="text"
          autoComplete="off"
          name="title"
          value={input.title}
          onChange={(e) => onChangeHandler(e)}
        />
        <HighLight />
        <InputBar />
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
        <HighLight />
        <InputBar />
        <Label>내용임</Label>
      </FormGroup>
      <FormGroup>
        <FormInput
          type="file"
          id="file"
          accept="image/*"
          multiple="multiple"
          onChange={fileUpload}
        />
        <HighLight />
        <InputBar />
        <Label>사진첨부</Label>
      </FormGroup>

      <FormGroup>
       <ImageLayout>
       {imageSrc && <ImageSize src={imageSrc} alt="preview-img" />}
       </ImageLayout>
        <HighLight />
        <InputBar />
        {/* <Label>미리보기</Label> */}
      </FormGroup>
      <button>등록하기</button>
    </FormContainer>
  );
};


export const ImageSize = styled.img`
     position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: gray;
`;

const ImageLayout = styled.div`
    position: relative;
    height: 400px;
    width: 400px;
    border-radius: 50px;
    /* overflow: hidden; */
`;

