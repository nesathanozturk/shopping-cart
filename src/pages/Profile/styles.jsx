import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const Wrapper = styled.div`
  background: #fff;
  width: 450px;
  position: relative;
  padding: 50px 20px 60px 20px;
  border: 2px solid #e6e6e6;
  border-radius: 10px;
`;

export const Title = styled.h1`
  color: #403866;
  width: 100%;
  padding-bottom: 30px;
  font-size: 30px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 17px;
`;

export const Button = styled.button`
  background-color: #827ffe;
  color: #fff;
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border: none;
  border-radius: 3px;
  outline: none !important;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.2;
  text-transform: uppercase;
  transition: all 0.4s;

  &:hover {
    background-color: #403866;
  }
`;
