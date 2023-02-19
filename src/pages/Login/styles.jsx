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
  border: 1px solid #e6e6e6;
  border-radius: 10px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Title = styled.h1`
  color: #403866;
  width: 100%;
  padding-bottom: 51px;
  font-size: 30px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
`;

export const InputContainer = styled.div`
  background-color: #e6e6e6;
  width: 100%;
  margin-bottom: 16px;
  border: 1px solid transparent;
  border-radius: 3px;
`;

export const Input = styled.input`
  background: 0 0;
  color: #403866;
  width: 100%;
  height: 62px;
  display: block;
  padding: 0 20px 0 38px;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.2;
`;

export const Help = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 0 24px 0;
`;

export const CheckboxContainer = styled.div`
  display: flex;
`;

export const Label = styled.label`
  color: #999;
  display: block;
  padding-left: 5px;
  font-size: 16px;
  line-height: 1.2;
  cursor: pointer;
`;

export const Link = styled.a`
  color: #827ffe;
  font-size: 16px;
  line-height: 1.4;
  text-decoration: underline;
  transition: all 0.4s;

  &:hover {
    color: #0056b3;
  }
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
