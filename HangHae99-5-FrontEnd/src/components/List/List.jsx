import { __getBoard } from "../../Redux/modules/boardSlice";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { StNoBoard, MainContainer, CardColumn, Card, CardBorder, CardInfo, CardDate, LodingContainer } from "./List.styled";
import ReactLoading from "react-loading";
// import axios from "axios";


export const List = () => {

  // Infinity Scroll
  // const [list, setList] = useState([]);
  // const [page, setPage] = useState(1);
  // const [load, setLoad] = useState(1);
  // const preventRef = useRef(true);
  // const obsRef = useRef(null);
  // const endRef = useRef(false); // 불필요한 렌더링을 막기 위해 useState 말구 useRef 씀

  // useEffect(() => {
  //   getPost();
  //   const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
  //   if (obsRef.current) observer.observe(obsRef.current);
  //   return () => { observer.disconnect(); }
  // }, [])

  // useEffect(() => {
  //   getPost();
  // }, [page]);

  // const obsHandler = ((entries) => {
  //   const target = entries[0];
  //   if (!endRef.current && target.isIntersecting && preventRef.current) {
  //     preventRef.current = false; // 옵쩌버 중복 실행 방지
  //     setPage(prev => prev + 1); // 페이지 값 증가시키기
  //     console.log("page", page)
  //   }
  // });

  // const getPost = useCallback(async() => {
  //   console.log("글 불러오기");
  //   setLoad(true); // 로딩 시작임
  //   const res = await axios.get(`${BASE_URL}/api/boards/list`);
  //   console.log(res.data)
  //   if(res.data) {
  //     setList(prev => [...prev, { ...res.data[0] }]);
  //     preventRef.current = true;
  //   } else {
  //     console.log(res);
  //   }
  //   setLoad(false);
  // }, [page]);



  // IO for infinite scroll
  // const defaultOption = {
  //   root: null,
  //   threshold: 0.5,
  //   rootMargin: '0px'
  // };

  // const useIntersect = (onIntersect, option) => {
  //   const [ref, setRef] = useState(null);
  //   const checkIntersect = useCallback(([entry], observer) => {
  //     if (entry.isIntersecting) {
  //       onIntersect(entry, observer);
  //     }
  //   }, []);
  //   useEffect(() => {
  //     let observer;
  //     if (ref) {
  //       observer = new IntersectionObserver(checkIntersect, {
  //         ...defaultOption,
  //         ...option
  //       });
  //       observer.observe(ref);
  //     }
  //     return () => observer && observer.disconnect();
  //   }, [ref, option.root, option.threshold, option.rootMargin, checkIntersect]);
  //   return [ref, setRef];
  // }

  // const page = useRef(pageCount);
  // const [_, setRef] = useIntersect(async (entry, observer) => {
  //   observer.unobserve(entry.target);
  //   await dispatch(__getBoard(page.current, true));
  //   observer.observe(entry.target);
  // }, {});
  // console.log("페이지 넘버임", page.current)

  // const page = useRef(pageCount)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getBoard()); // page.current
  }, [dispatch]);



  // 불러오기
  const boards = useSelector((state) => state?.boards?.boards);
  console.log("게시물 리스트임", boards);

  // 로딩 값, 페이지 값 불러오기
  const { isLoading, pageCount  } = useSelector(state => ({
    isLoading: state.boards.isLoading,
    pageCount: state.boards.pageCount,
  }));
  // console.log(isLoading, pageCount);



  // 백엔드가 n개 만큼만 데이터를 보내줌 
  // -> post요청이 되면[scroll이 바닥에 닿을 때] 
  // -> n개 보내줌
  // -> post요청이 되면[scroll이 바닥에 닿을 때] 
  // -> n개 보내줌
  // -> ...
  // 쁠러스 알파
  

  // 만약 데이터가없다면 화면에 띄워줄 메시지
  if (boards.length === 0) {
    return (
      <StNoBoard>
        <h1>아직 생성한 게시물이 없습니다. 소중한 의견을 남겨주세요.</h1>
        <Link to="/form">글 작성하러 가기</Link>
        <LodingContainer><ReactLoading type="spin" color="#ff4444"/></LodingContainer>
      </StNoBoard>
    ) 
  };

  return(
    <>
      <MainContainer>
        {
          boards?.map((board) => {
            return (
              <CardColumn 
                key={ board.boardId }
                onClick={() => {
                  navigate(`/api/boards/detail/${board.boardId}`)
                }}
              >
                <Card>
                  <CardBorder/>
                  <CardInfo>
                    <p>{ board.countHeart } Loved</p>
                    <p>{ board.countComment } Comments</p>
                  </CardInfo>
                  <img src={board.file} alt="test"/>
                  <h1>{ board.title }</h1>
                  <CardDate>{ board.createdAt.substr(0,10) }</CardDate>
                </Card>
              </CardColumn>
            )
          })
        }
        {/* {
          isLoading ?
            <LodingContainer ref={setRef}>
              <ReactLoading type="spin" color="#ff4444"/>
            </LodingContainer> :
            null
        } */}
      </MainContainer>
    </>
  )
};

