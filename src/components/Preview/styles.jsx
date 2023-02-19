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
