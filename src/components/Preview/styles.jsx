import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  color: #fff;
  margin-bottom: 40px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: relative;
`;

export const SliderButtons = styled.button`
  width: 50px;
  height: 10%;
  color: red;
  position: absolute;
  z-index: 99;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
`;

export const NextButton = styled.button`
  color: white;
  font-size: 2rem;
  position: absolute;
  top: 100px;
  right: -1210px;
`;

export const PrevButton = styled.button`
  color: white;
  font-size: 2rem;
  position: absolute;
  top: 100px;
  left: 20px;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const TitleAlt = styled.p`
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background: transparent;
  color: #f2921d;
  padding: 10px 30px 10px 30px;
  font-size: 1.2rem;
  border: 1px solid #f2921d;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #f2921d;
    color: #fff;
  }
`;
