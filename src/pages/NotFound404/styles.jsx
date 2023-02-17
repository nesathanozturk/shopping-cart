import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background: #f0f0f0;
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

export const ErrorText = styled.h1`
  padding: 20px;
`;

export const Text = styled.p`
  margin-bottom: 40px;
  font-size: 20px;
`;

export const Button = styled.div`
  .error {
    background: #f0a04b;
    color: #fff;
    padding: 12px;
    font-size: 1.5rem;
    text-decoration: none;
    border-radius: 10px;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: #d3883d;
    }
  }
`;
