import { useState } from "react";
import { useDispatch } from "react-redux";
import { fileUploadApi } from "../../Redux/modules/API/fileUploadApi"
import { __postBoard } from "../../Redux/modules/boardSlice";
import { __addFiles } from '../../Redux/modules/API/fileUploadApi'
import { ImageSize, ImageLayout, FormContainer, FormOptionContainer, FormBack, FormBackText, FormBackInput, FormFront, FormFrontTitle, FormFrontInput, FormFrontTextarea } from "./Form.styled"


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
   //이미지 폼밸류 보내기
 const [image,setImage] = useState(null);

 //이미지 온체인지핸들러
 const fileUpload = (e)  =>{
  encodeFileToBase64(e.target.files[0]);
  const image = URL.createObjectURL(e.target.files[0]);
  setImage(image);
  console.log("이미지이타켓벨류",image)  
 }
//이미지, 제목, 콘텐트 서버에 보내기
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__postBoard(input));
    setInput(init);
    // dispatch(__addFiles(image));
    
    // const formData = new FormData();

    // formData.append("image", input.file);
    // formData.append("title", input.title);
    // formData.append("content", input.content);

  //   formData.getAll(formData)
  //   Object.entries(input).forEach(([key, value]) => {
  //     formData.append(key, value);
  //     fileUploadApi(formData);
  // });

  };

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
    <FormContainer>
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
    </FormContainer>
  );
};
