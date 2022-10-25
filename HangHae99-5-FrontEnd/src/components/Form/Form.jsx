import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormContainer, FormGroup } from "./Form.styled";
import { fileUploadApi } from "../../Redux/modules/API/fileUploadApi"
import { FormInput, HighLight, InputBar, Label } from "../../style/MaterialInput.styled";
import { __postBoard } from "../../Redux/modules/boardSlice";
import styled from "styled-components";

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
    <FormContainer2>
      <FormOptionContainer>
        <form onSubmit={onSubmitHandler}>
          <FormBack>
            <FormBackText>
              <h3>이미지를 업로드 해보세용</h3>
              <ImageLayout>
                {imageSrc && <ImageSize src={imageSrc} alt="preview-img" />}
              </ImageLayout>
              <FormBackInput type="file"></FormBackInput>
            </FormBackText>
          </FormBack>
          <FormFront>
            <FormFrontTitle>내용을 작성 해보세용</FormFrontTitle>
            <FormFrontInput
              type="text"
              autoComplete="off"
              name="title"
              value={input.title}
              onChange={(e) => onChangeHandler(e)}
            />
            <FormFrontTextarea
              type="text"
              autoComplete="off"
              name="content"
              value={input.content}
              onChange={(e) => onChangeHandler(e)}
            />
          </FormFront>
        </form>
      </FormOptionContainer>
    </FormContainer2>
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
export const FormContainer2 = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const FormOptionContainer = styled.div`
  position: relative;
  width: 80%;
`

export const FormBack = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(0,0,0,0.7);
  border-radius: 3px;
`

export const FormBackText = styled.div`
  width: 50%;
  padding: 75px 45px;
  color: white;
  font-weight: 300;
  margin-bottom: 15px;
  font-size: 1.66rem;
  line-height: 1em;
`

export const FormBackInput = styled.input`
  margin-top: 30px;
  border: 1px solid gray;
  width: 10rem;
  border-radius: 3px;
  padding: 10px 30px;
  color: white;
  text-transform: uppercase;
  line-height: 1em;
  letter-spacing: .2rem;
  transition: background-color .2s ease-in-out, color .2s ease-in-out;
`

export const FormFront = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  width: calc(50% - 30px);
  min-height: 420px;
  background-color: white;
  border: 1px solid #ff4444;
  border-radius: 3px;
  box-shadow: 2px 0 15px rgba($black, .25);
  overflow: hidden;
  transform: translate3d(100%, -50%, 0);
  transition: transform .4s ease-in-out;
`

export const FormFrontTitle = styled.h2`
  font-size: 1.5rem;
  padding: 15px;
  font-weight: 400;
  line-height: 1em;
  text-transform: uppercase;
  text-align: center;
  color: #ff4444;
  letter-spacing: .1rem;
`

export const FormFrontInput = styled.input`
  padding: 10px;
  width: 15rem;
  margin-bottom: 2rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 3rem;
  outline: none;
  /* border: none; */
`

export const FormFrontTextarea = styled.textarea`
  padding: 10px;
  width: 20rem;
  height: 10rem;
  display: block;
  margin: 0 auto;
  outline: none;
  /* background-color: rgba(0, 0, 0, 0.7); */
  /* border: none; */
`
