import styled from "styled-components";
import { breakpoints } from "../../theme";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background: #f0f0f0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  display: block;

  @media (max-width: 669px) {
    width: 100%;
  }
`;

export const ErrorText = styled.h1`
  padding: 20px;

  @media ${breakpoints.xl} {
    font-size: 1.3rem;
  }
`;

export const Text = styled.p`
  margin-bottom: 40px;
  font-size: 20px;

  @media ${breakpoints.xl} {
    font-size: 18px;
  }
`;

export const Button = styled.div`
  .error {
    background: #f0a04b;
    color: #fff;
    padding: 11px;
    font-size: 1.3rem;
    text-decoration: none;
    border-radius: 10px;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: #d3883d;
    }

    @media ${breakpoints.xl} {
      padding: 10px;
      font-size: 1.2rem;
    }
  }
`;
