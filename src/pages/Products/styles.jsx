import styled from "styled-components";

export const Section = styled.section`
  width: 90%;
  margin: 50px auto 60px auto;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 2.5rem;
  letter-spacing: 2px;
  text-align: center;
`;

export const TitleAlt = styled.h3`
  color: #666;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.2em;
  letter-spacing: 2px;
  text-align: center;
`;

export const Input = styled.input`
  background-color: #e6e6e6;
  color: #403866;
  width: 25rem;
  height: 42px;
  margin-bottom: 20px;
  padding: 0 20px 0 20px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  outline: none;

  &::placeholder {
    font-size: 1rem;
  }

  @media (max-width: 428px) {
    width: 18rem;
  }
`;

export const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 30px;
  flex-wrap: wrap;
  text-align: center;
`;
