import styled from "styled-components";

export const ImageSize = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
`;

export const ImageLayout = styled.div`
  position: relative;
  height: 15rem;
  width: 25rem;
  border-radius: 50px;
  background: rgba(0,0,0,0.25);
  /* overflow: hidden; */
`;
export const FormContainer = styled.section`
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
  background-color: #001933;
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
  font-size: 0.6rem;
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
  height: 40rem;
  min-height: 420px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 2px 0 15px rgba(0,0,0, .25);
  overflow: hidden;
  transform: translate3d(100%, -50%, 0);
  transition: transform .4s ease-in-out;
`

export const FormFrontTitle = styled.h2`
  font-size: 1.5rem;
  padding: 15px;
  margin-top: 5rem;
  font-weight: 400;
  line-height: 1em;
  text-transform: uppercase;
  text-align: center;
  color: #ff4444;
  letter-spacing: .1rem;
`

export const FormFrontInput = styled.input`
  padding: 10px;
  width: 50%;
  display: block;
  margin: 0 auto;
  margin-bottom: 3rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #ff4444;
`

export const FormFrontTextarea = styled.textarea`
  box-sizing: border-box;
  padding: 10px;
  width: 70%;
  height: 12rem;
  display: block;
  margin: 0 auto;
  outline: none;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
`