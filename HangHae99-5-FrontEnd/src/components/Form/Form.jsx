import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { fileUploadApi } from "../../Redux/modules/API/boardApi";
import { addPost } from "../../Redux/modules/boardSlice"; 
import { __postBoard } from "../../Redux/modules/boardSlice";
import {
  ImageSize,
  ImageLayout,
  FormContainer,
  FormOptionContainer,
  FormBack,
  FormBackText,
  FormBackInput,
  FormFront,
  FormFrontTitle,
  FormFrontInput,
  FormFrontTextarea,
} from "./Form.styled";

export const Form = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //text usestate
  const init= {
    title: "",
    content:"",
    file: "",
  }
  const [input, setInput] = useState(init);
  // const [content, setContent] = useState("");


  //이미지, 이미지미리보기 usestate
  const [imageSrc, setImageSrc] = useState("");
  const [image, setImage] = useState(null);

  //board usestate
  // const [board, setBoard] = useState({
  //   title: "",
  //   content: "",
  //   file: "",
  // });

  //이미지 온체인지핸들러
  const fileUpload = (e) => {
    //이미지데이터 스테이트에 담기
    setImage(e.target.files[0]);

  //이미지 미리보기
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setImageSrc([...imageSrc, previewImgUrl]);
      }
    };
  };
//이미지, 제목, 콘텐트 서버에 보내기
//text, image Borad에 넣었음
const onChangeHandler = (e) => {
  const { name, value } = e.target;
  setInput({
    ...input,
    [name]: value,
    file: image,
  });
};

//업데이트 된 board를 디스패치 보내기
const onSubmitHandler = (e) => {
  e.preventDefault();
  dispatch(addPost(input));
  navigate("/")
};

  return (
  <FormContainer>
    <FormOptionContainer>
      <form onSubmit={onSubmitHandler} method="post" enctype="multipart/form-data">
        <FormBack>
          <FormBackText>
            <h3>이미지를 업로드 해보세용</h3>
            <ImageLayout>
              <ImageSize src={imageSrc} alt="" />
            </ImageLayout>
            <FormBackInput
              type="file"
              id="file"
              accept="image/jpg, image/jpeg, image/png"
              onChange={fileUpload}
            ></FormBackInput>
          </FormBackText>
        </FormBack>
        <FormFront>
          <FormFrontTitle>내용을 작성 해보세용</FormFrontTitle>
          <FormFrontInput
            type="text"
            autoComplete="off"
            id = "title"
            name="title"
            onChange={onChangeHandler}
          />
          <FormFrontTextarea
            type="text"
            autoComplete="off"
            id="content"
            name="content"
            onChange={onChangeHandler}
          />
        </FormFront>
        <button>등록</button>
      </form>
    </FormOptionContainer>
  </FormContainer>
);
  };
